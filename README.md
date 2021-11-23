JSX SP Events (@whitetrefoil/jsx-sp-events)
==================================================

An event helper because React decides to ban using of "javascript:".

"S" for "event.stopPropagation()", "P" for "event.preventDefault()".

Usage
---------

**IMPORTANT**: If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

### Typescript

```jsx
import { prevented, stopped, preventedAndStopped } from '@whitetrefoil/jsx-sp-events';
// Or below if no module system
const { prevented, stopped, preventedAndStopped } = require('@whitetrefoil/jsx-sp-events');
```

### Common

```jsx
export default () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(myAction());
    return <a href="#" onClick="prevented(onClick)">Click Me!</a>
}
```

API
---

### `prevented(eventOrHandler?)`

Alias: `p`

`onClick={prevented}` is same as `onClick={prevented()}` means
`onClick={ev => ev.preventDefault()}`;

`onClick={prevented(myHandler)}` means
```
onClick={ev => {
    ev.preventDefault();
    myHandler.call(ev.currentTarget, ev);
}}
```

### `stopped`

Alias: `s`

Same as `prevented` but `ev.stopPropagation()` is called instead of `ev.preventDefault()`.

### `preventedAndStopped`

Aliases: `stoppedAndPrevented`, `ps`, `sp`

Same as above but both `ev.stopPropagation()` and `ev.preventDefault()` are called.

Changelog & Roadmap
-------------------

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
