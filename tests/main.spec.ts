import {describe, expect, test, vi} from 'vitest'
import {p, prevented, preventedAndStopped, ps, s, sp, stopped, stoppedAndPrevented} from '#/main.js'
import type {Handler, PEvent, SEvent, SPEvent} from '#/main.js'

interface Target {
  id: string
}

interface PreventableEvent {
  preventDefault: (...args: unknown[]) => void
  currentTarget: Target
}

interface StoppableEvent {
  stopPropagation: (...args: unknown[]) => void
  currentTarget: Target
}

type PreventableStoppableEvent = PreventableEvent & StoppableEvent

function createPreventableEvent() {
  const preventDefault = vi.fn()

  return {
    ev: {
      preventDefault,
      currentTarget: {id: 'target'},
    } satisfies PreventableEvent,
    preventDefault,
  }
}

function createStoppableEvent() {
  const stopPropagation = vi.fn()

  return {
    ev: {
      stopPropagation,
      currentTarget: {id: 'target'},
    } satisfies StoppableEvent,
    stopPropagation,
  }
}

function createPreventableStoppableEvent() {
  const preventable = createPreventableEvent()
  const stoppable = createStoppableEvent()

  return {
    ev: {
      ...preventable.ev,
      ...stoppable.ev,
    } satisfies PreventableStoppableEvent,
    preventDefault : preventable.preventDefault,
    stopPropagation: stoppable.stopPropagation,
  }
}

describe('aliases', () => {
  test('export the same callable helpers', () => {
    expect(p).toBe(prevented)
    expect(s).toBe(stopped)
    expect(preventedAndStopped).toBe(stoppedAndPrevented)
    expect(ps).toBe(stoppedAndPrevented)
    expect(sp).toBe(stoppedAndPrevented)
  })
})

describe('prevented', () => {
  test('returns a stable handler when omitted', () => {
    expect(prevented()).toBe(prevented())
  })

  test('works as a direct event handler', () => {
    const {ev, preventDefault} = createPreventableEvent()

    prevented(ev)

    expect(preventDefault).toHaveBeenCalledTimes(1)
  })

  test('wraps a handler with preventDefault, original event, and currentTarget binding', () => {
    const events: string[] = []
    const {ev, preventDefault} = createPreventableEvent()
    let handlerCalls = 0

    const handler: Handler<PEvent<Target>> = function(this: unknown, receivedEvent): void {
      handlerCalls += 1
      events.push('handler')

      expect(this).toBe(ev.currentTarget)
      expect(receivedEvent).toBe(ev)
    }

    preventDefault.mockImplementation(() => {
      events.push('preventDefault')
    })

    const wrappedHandler: (ev: PEvent<Target>) => void = prevented<Target>(handler)

    wrappedHandler(ev)

    expect(preventDefault).toHaveBeenCalledTimes(1)
    expect(handlerCalls).toBe(1)
    expect(events).toEqual(['preventDefault', 'handler'])
  })

  test('rejects null because only undefined means no argument', () => {
    expect(() => {
      prevented(null as never)
    }).toThrow(TypeError)
  })
})

describe('stopped', () => {
  test('returns a stable handler when omitted', () => {
    expect(stopped()).toBe(stopped())
  })

  test('works as a direct event handler', () => {
    const {ev, stopPropagation} = createStoppableEvent()

    stopped(ev)

    expect(stopPropagation).toHaveBeenCalledTimes(1)
  })

  test('wraps a handler with stopPropagation, original event, and currentTarget binding', () => {
    const events: string[] = []
    const {ev, stopPropagation} = createStoppableEvent()
    let handlerCalls = 0

    const handler: Handler<SEvent<Target>> = function(this: unknown, receivedEvent): void {
      handlerCalls += 1
      events.push('handler')

      expect(this).toBe(ev.currentTarget)
      expect(receivedEvent).toBe(ev)
    }

    stopPropagation.mockImplementation(() => {
      events.push('stopPropagation')
    })

    const wrappedHandler: (ev: SEvent<Target>) => void = stopped<Target>(handler)

    wrappedHandler(ev)

    expect(stopPropagation).toHaveBeenCalledTimes(1)
    expect(handlerCalls).toBe(1)
    expect(events).toEqual(['stopPropagation', 'handler'])
  })

  test('rejects null because only undefined means no argument', () => {
    expect(() => {
      stopped(null as never)
    }).toThrow(TypeError)
  })
})

describe('stoppedAndPrevented', () => {
  test('returns a stable handler when omitted', () => {
    expect(stoppedAndPrevented()).toBe(stoppedAndPrevented())
  })

  test('works as a direct event handler', () => {
    const {ev, preventDefault, stopPropagation} = createPreventableStoppableEvent()

    stoppedAndPrevented(ev)

    expect(stopPropagation).toHaveBeenCalledTimes(1)
    expect(preventDefault).toHaveBeenCalledTimes(1)
  })

  test('wraps a handler with both event side effects, original event, and currentTarget binding', () => {
    const events: string[] = []
    const {ev, preventDefault, stopPropagation} = createPreventableStoppableEvent()
    let handlerCalls = 0

    const handler: Handler<SPEvent<Target>> = function(this: unknown, receivedEvent): void {
      handlerCalls += 1
      events.push('handler')

      expect(this).toBe(ev.currentTarget)
      expect(receivedEvent).toBe(ev)
    }

    stopPropagation.mockImplementation(() => {
      events.push('stopPropagation')
    })

    preventDefault.mockImplementation(() => {
      events.push('preventDefault')
    })

    const wrappedHandler: (ev: SPEvent<Target>) => void = stoppedAndPrevented<Target>(handler)

    wrappedHandler(ev)

    expect(stopPropagation).toHaveBeenCalledTimes(1)
    expect(preventDefault).toHaveBeenCalledTimes(1)
    expect(handlerCalls).toBe(1)
    expect(events).toEqual(['stopPropagation', 'preventDefault', 'handler'])
  })

  test('rejects null because only undefined means no argument', () => {
    expect(() => {
      stoppedAndPrevented(null as never)
    }).toThrow(TypeError)
  })
})
