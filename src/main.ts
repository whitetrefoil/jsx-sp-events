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

export type Handler<E> = (ev: E) => void


export function prevented(evOrHandler: Preventable): void
export function prevented<T, E extends PEvent<T>>(evOrHandler?: Handler<E>): Handler<E>
export function prevented<T, E extends PEvent<T>>(evOrHandler?: Preventable|Handler<E>): Handler<E>|void {
  if (evOrHandler == null) {
    return (ev: Preventable) => {
      ev.preventDefault()
    }
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


export function stopped(evOrHandler: Stoppable): void
export function stopped<T, E extends SEvent<T>>(evOrHandler?: Handler<E>): Handler<E>
export function stopped<T, E extends SEvent<T>>(evOrHandler?: Stoppable|Handler<E>): Handler<E>|void {
  if (evOrHandler == null) {
    return (ev: Stoppable) => {
      ev.stopPropagation()
    }
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


export function stoppedAndPrevented(evOrHandler: Stoppable&Preventable): void
export function stoppedAndPrevented<T, E extends SPEvent<T>>(evOrHandler?: Handler<E>): Handler<E>
export function stoppedAndPrevented<T, E extends SPEvent<T>>(evOrHandler?: (Stoppable&Preventable)|Handler<E>): Handler<E>|void {
  if (evOrHandler == null) {
    return (ev: Stoppable&Preventable) => {
      ev.stopPropagation()
      ev.preventDefault()
    }
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
