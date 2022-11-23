export interface Preventable {
  preventDefault: (...args: any[]) => void
}

export interface Stoppable {
  stopPropagation: (...args: any[]) => void
}

export interface Targeted<T = unknown> {
  currentTarget: T
}

export type PEvent<T> = Preventable&Targeted<T>
export type SEvent<T> = Stoppable&Targeted<T>
export type SPEvent<T> = Stoppable&Preventable&Targeted<T>

export type Handler<E, This = unknown> = (this: This, ev: E) => void


function _prevented(ev: Preventable): void {
  ev.preventDefault()
}

export function prevented(evOrHandler: Preventable): void
export function prevented<T, E extends PEvent<T>>(evOrHandler?: Handler<E>): Handler<E, T>
export function prevented<T, E extends PEvent<T>>(evOrHandler?: Preventable|Handler<E>): Handler<E, T>|void {
  if (evOrHandler === undefined) {
    return _prevented
  }

  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
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
export function stopped<T, E extends SEvent<T>>(evOrHandler?: Handler<E>): Handler<E, T>
export function stopped<T, E extends SEvent<T>>(evOrHandler?: Stoppable|Handler<E>): Handler<E, T>|void {
  if (evOrHandler == null) {
    return _stopped
  }

  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
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
export function stoppedAndPrevented<T, E extends SPEvent<T>>(evOrHandler?: Handler<E>): Handler<E, T>
export function stoppedAndPrevented<T, E extends SPEvent<T>>(evOrHandler?: (Stoppable&Preventable)|Handler<E>): Handler<E, T>|void {
  if (evOrHandler == null) {
    return _stoppedAndPrevented
  }

  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
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
