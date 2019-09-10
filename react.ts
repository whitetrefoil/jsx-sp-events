import { ReactEventHandler, SyntheticEvent } from 'react';


export function stopped<T extends Element, E extends SyntheticEvent<T>>(ev: E): void;
export function stopped<T extends Element, E extends SyntheticEvent<T>>(handler?: ReactEventHandler<T>): ReactEventHandler<T>;
export function stopped<T extends Element, E extends SyntheticEvent<T>>(evOrHandler: E|ReactEventHandler<T>|undefined): ReactEventHandler<T>|void {
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


export function prevented<T extends Element, E extends SyntheticEvent<T>>(ev: E): void;
export function prevented<T extends Element, E extends SyntheticEvent<T>>(handler?: ReactEventHandler<T>): ReactEventHandler<T>;
export function prevented<T extends Element, E extends SyntheticEvent<T>>(evOrHandler: E|ReactEventHandler<T>|undefined): ReactEventHandler<T>|void {
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


export function preventedAndStopped<T extends Element, E extends SyntheticEvent<T>>(ev: E): void;
export function preventedAndStopped<T extends Element, E extends SyntheticEvent<T>>(handler?: ReactEventHandler<T>): ReactEventHandler<T>;
export function preventedAndStopped<T extends Element, E extends SyntheticEvent<T>>(evOrHandler: E|ReactEventHandler<T>|undefined): ReactEventHandler<T>|void {
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
