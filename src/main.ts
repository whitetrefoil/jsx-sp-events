export interface Preventable {
  preventDefault: (...args: any[]) => void
}

export interface Stoppable {
  stopPropagation: (...args: any[]) => void
}

export interface HasCValue<T = unknown> {
  currentTarget: T
}

export type PEvent<T> = Preventable&HasCValue<T>
export type SEvent<T> = Stoppable&HasCValue<T>
export type SPEvent<T> = Stoppable&Preventable&HasCValue<T>

export type Handler<E, This = unknown> = (this: This, ev: E) => void


function _prevented(ev: Preventable): void {
  ev.preventDefault()
}

export function prevented(evOrHandler: Preventable): void
export function prevented<T>(evOrHandler?: Handler<PEvent<T>>): Handler<PEvent<T>, T>

export function prevented<T>(evOrHandler?: Preventable|Handler<PEvent<T>>): Handler<PEvent<T>, T>|void {
  if (evOrHandler === undefined) {
    return _prevented
  }

  if (typeof evOrHandler === 'function') {
    return (ev: PEvent<T>) => {
      ev.preventDefault()
      evOrHandler.call(ev.currentTarget, ev)
    }
  }

  evOrHandler.preventDefault()
  return undefined
}

export const p = prevented


function _stopped(ev: Stoppable): void {
  ev.stopPropagation()
}

export function stopped(evOrHandler: Stoppable): void
export function stopped<T>(evOrHandler?: Handler<SEvent<T>>): Handler<SEvent<T>, T>

export function stopped<T>(evOrHandler?: Stoppable|Handler<SEvent<T>>): Handler<SEvent<T>, T>|void {
  if (evOrHandler == null) {
    return _stopped
  }

  if (typeof evOrHandler === 'function') {
    return (ev: SEvent<T>) => {
      ev.stopPropagation()
      evOrHandler.call(ev.currentTarget, ev)
    }
  }

  evOrHandler.stopPropagation()
  return undefined
}

export const s = stopped


function _stoppedAndPrevented(ev: Stoppable&Preventable): void {
  ev.stopPropagation()
  ev.preventDefault()
}

export function stoppedAndPrevented(evOrHandler: Stoppable&Preventable): void
export function stoppedAndPrevented<T>(evOrHandler?: Handler<SPEvent<T>>): Handler<SPEvent<T>, T>

export function stoppedAndPrevented<T>(evOrHandler?: (Stoppable&Preventable)|Handler<SPEvent<T>>): Handler<SPEvent<T>, T>|void {
  if (evOrHandler == null) {
    return _stoppedAndPrevented
  }

  if (typeof evOrHandler === 'function') {
    return (ev: SPEvent<T>) => {
      ev.stopPropagation()
      ev.preventDefault()
      evOrHandler.call(ev.currentTarget, ev)
    }
  }

  evOrHandler.stopPropagation()
  evOrHandler.preventDefault()
  return undefined
}

export const preventedAndStopped = stoppedAndPrevented
export const ps = stoppedAndPrevented
export const sp = stoppedAndPrevented
