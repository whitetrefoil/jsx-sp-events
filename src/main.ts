interface Preventable {
  preventDefault: (...args: any[]) => void
}

interface Stoppable {
  stopPropagation: (...args: any[]) => void
}

interface Targeted<T = unknown> {
  currentTarget: T
}

type PHandler<T = unknown> = (ev: Preventable&Targeted<T>) => void
type SHandler<T = unknown> = (ev: Stoppable&Targeted<T>) => void
type SPHandler<T = unknown> = (ev: Stoppable&Preventable&Targeted<T>) => void


export function prevented(evOrHandler: Preventable): void
export function prevented<T = unknown>(evOrHandler?: PHandler<T>): PHandler<T>
export function prevented<T = unknown>(evOrHandler?: Preventable|PHandler<T>): PHandler<T>|void {
  if (evOrHandler == null) {
    return (ev: Preventable) => {
      ev.preventDefault()
    }
  }

  if (typeof evOrHandler === 'function') {
    return (ev: Preventable&Targeted<T>) => {
      ev.preventDefault()
      evOrHandler.call(ev.currentTarget, ev)
    }
  }

  evOrHandler.preventDefault()
  return undefined
}

export const p = prevented


export function stopped(evOrHandler: Stoppable): void
export function stopped<T = unknown>(evOrHandler?: SHandler<T>): SHandler<T>
export function stopped<T = unknown>(evOrHandler?: Stoppable|SHandler<T>): SHandler<T>|void {
  if (evOrHandler == null) {
    return (ev: Stoppable) => {
      ev.stopPropagation()
    }
  }

  if (typeof evOrHandler === 'function') {
    return (ev: Stoppable&Targeted<T>) => {
      ev.stopPropagation()
      evOrHandler.call(ev.currentTarget, ev)
    }
  }

  evOrHandler.stopPropagation()
  return undefined
}

export const s = stopped


export function stoppedAndPrevented(evOrHandler: Stoppable&Preventable): void
export function stoppedAndPrevented<T = unknown>(evOrHandler?: SPHandler<T>): SPHandler<T>
export function stoppedAndPrevented<T = unknown>(evOrHandler?: (Stoppable&Preventable)|SPHandler<T>): SPHandler<T>|void {
  if (evOrHandler == null) {
    return (ev: Stoppable&Preventable) => {
      ev.stopPropagation()
      ev.preventDefault()
    }
  }

  if (typeof evOrHandler === 'function') {
    return (ev: Stoppable&Preventable&Targeted<T>) => {
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
