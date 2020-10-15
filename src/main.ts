interface Preventable<T> {
  preventDefault: (...args: any[]) => void
  currentTarget: T
}

interface Stoppable<T> {
  stopPropagation: (...args: any[]) => void
  currentTarget: T
}

type Handler<T, E extends Preventable<T>|Stoppable<T>> = (this: T, ev: E) => void


export function prevented<T, E extends Preventable<T>>(evOrHandler: E): void
export function prevented<T, E extends Preventable<T>>(evOrHandler?: Handler<T, E>): Handler<T, E>
export function prevented<T, E extends Preventable<T>>(evOrHandler?: E|Handler<T, E>): Handler<T, E>|void {
  if (evOrHandler == null) {
    return (ev: E) => {
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


export function stopped<T, E extends Stoppable<T>>(evOrHandler: E): void
export function stopped<T, E extends Stoppable<T>>(evOrHandler?: Handler<T, E>): Handler<T, E>
export function stopped<T, E extends Stoppable<T>>(evOrHandler?: E|Handler<T, E>): Handler<T, E>|void {
  if (evOrHandler == null) {
    return (ev: E) => {
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


export function preventedAndStopped<T, E extends Preventable<T>&Stoppable<T>>(evOrHandler: E): void
export function preventedAndStopped<T, E extends Preventable<T>&Stoppable<T>>(evOrHandler?: Handler<T, E>): Handler<T, E>
export function preventedAndStopped<T, E extends Preventable<T>&Stoppable<T>>(evOrHandler?: E|Handler<T, E>): Handler<T, E>|void {
  if (evOrHandler == null) {
    return (ev: E) => {
      ev.preventDefault()
      ev.stopPropagation()
    }
  }

  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
      ev.preventDefault()
      ev.stopPropagation()
      evOrHandler.call(ev.currentTarget, ev)
    }
  }

  evOrHandler.preventDefault()
  evOrHandler.stopPropagation()
  return undefined
}

export const stoppedAndPrevented = preventedAndStopped
export const ps = preventedAndStopped
export const sp = preventedAndStopped
