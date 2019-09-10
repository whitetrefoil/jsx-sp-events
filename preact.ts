import { JSX } from 'preact/src';

export function stopped<E extends Event>(ev: E): void;
export function stopped<E extends Event>(handler?: JSX.EventHandler<E>): JSX.EventHandler<E>;
export function stopped<E extends Event>(evOrHandler: E|JSX.EventHandler<E>|undefined): JSX.EventHandler<E>|void {
  if (evOrHandler == null) {
    return (ev: E) => { ev.stopPropagation(); };
  }
  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
      ev.stopPropagation();
      return evOrHandler(ev);
    };
  }
  evOrHandler.stopPropagation();
}


export function prevented<E extends Event>(ev: E): void;
export function prevented<E extends Event>(handler?: JSX.EventHandler<E>): JSX.EventHandler<E>;
export function prevented<E extends Event>(evOrHandler: E|JSX.EventHandler<E>|undefined): JSX.EventHandler<E>|void {
  if (evOrHandler == null) {
    return (ev: E) => { ev.preventDefault(); };
  }
  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
      ev.preventDefault();
      return evOrHandler(ev);
    };
  }
  evOrHandler.preventDefault();
}


export function preventedAndStopped<E extends Event>(ev: E): void;
export function preventedAndStopped<E extends Event>(handler?: JSX.EventHandler<E>): JSX.EventHandler<E>;
export function preventedAndStopped<E extends Event>(evOrHandler: E|JSX.EventHandler<E>|undefined): JSX.EventHandler<E>|void {
  if (evOrHandler == null) {
    return (ev: E) => {
      ev.preventDefault();
      ev.stopPropagation();
    };
  }
  if (typeof evOrHandler === 'function') {
    return (ev: E) => {
      ev.preventDefault();
      ev.stopPropagation();
      return evOrHandler(ev);
    };
  }
  evOrHandler.preventDefault();
  evOrHandler.stopPropagation();
}
