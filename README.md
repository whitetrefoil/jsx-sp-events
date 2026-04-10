JSX SP Events (@whitetrefoil/jsx-sp-events)
==================================================

A tiny helper to reduce codes about "S"(`ev.stopPropagation()`) & "P"(`ev.preventDefault()`).

Usage
---------

This package is an ESM, cannot be used directly as a CJS module.

The published package intentionally keeps `src/` and `tests/` so consumers can inspect the reference implementation and executable examples.

### Typescript

```jsx
import { prevented, stopped, preventedAndStopped } from '@whitetrefoil/jsx-sp-events';
```

### Common

```jsx
export default () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(myAction());
    return <a href="#" onClick={prevented(onClick)}>Click Me!</a>
}
```

API
---

### `prevented(eventOrHandler?)`

Alias: `p`

`onClick={prevented}` or `onClick={prevented()}` means
`onClick={ev => ev.preventDefault()}`;

Only omitting the argument is supported for this form. `undefined` is treated as "no handler provided"; `null` is not.

`onClick={prevented(myHandler)}` means
```
onClick={ev => {
    ev.preventDefault();
    myHandler.call(ev.currentTarget, ev);
}}
```

The wrapped handler always receives the original event object, and `this` is bound to `ev.currentTarget`.

### `stopped`

Alias: `s`

Same as `prevented` but `ev.stopPropagation()` is called instead of `ev.preventDefault()`.

The same argument rule applies here: omit the argument or pass a handler; `null` is not treated as an empty call.

### `preventedAndStopped`

Aliases: `stoppedAndPrevented`, `ps`, `sp`

Same as above but both `ev.stopPropagation()` and `ev.preventDefault()` are called.

As with the other helpers, only `undefined` means "no handler provided".

Changelog & Roadmap
-------------------

### v0.10.0

* Infra upgrades;

### v0.9.0

* Optimize types;

### v0.8.0

* Infra upgrades;
* TS def of `this`;
* Funcs w/ no params will return a stable handler function;

### v0.7.0

* Upgrade to typescript 3.7 & built to a real ESM.

### v0.6.0

* fix: Cannot specify event type;

### v0.5.0

* fix: Cannot guess event target type in pure preact;
* infra!: upgrade infrastructure & dependencies;

### v0.4.1

* Fix build scripts & changelog.

### v0.4.0

* Upgrade infrastructure & migrate to ESM.

### v0.3.0

* Remove unnecessary files from release.

### v0.2.0

* No more `"@whitetrefoil/jsx-sp-events/preact" & "@whitetrefoil/jsx-sp-events/react"`,
  only `"@whitetrefoil/jsx-sp-events"`.
* Keep `this` context (as `ev.currentTarget`) for handlers passed-in.
* Add some shorter aliases.
* Infrastructure upgrades.

### v0.1.0

* Initial release.
