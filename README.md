JSX SP Events (@whitetrefoil/jsx-sp-events)
==================================================

A event helper because React decides to ban using of "javascript:".

"S" for "event.stopPropagation()", "P" for "event.preventDefault()".

Usage
---------

**IMPORTANT**: If your code isn't targeting the latest syntax spec of JS / ES,
please use something like babel to transfer this library.

### Typescript + Preact

```tsx
import { prevented, stopped, preventedAndStopped } from '@whitetrefoil/jsx-sp-events/preact';
```

### Typescript + React

```tsx
import { prevented, stopped, preventedAndStopped } from '@whitetrefoil/jsx-sp-events/react';
```

### Javascript

```jsx
import { prevented, stopped, preventedAndStopped } from '@whitetrefoil/jsx-sp-events';
// Or below if no module system
const { prevented, stopped, preventedAndStopped } = require('@whitetrefoil/jsx-sp-events');
```

### Common

```tsx
export default () => {
    const dispatch = useDispatch();
    const onClick = () => dispatch(myAction());
    return <a href="#" onClick="prevented(onClick)">Click Me!</a>
}
```

API
---

### `prevented`

`onClick={prevented}` is same as `onClick={prevented()}` means
`onClick={ev => ev.preventDefault()}`;

`onClick={prevented(myHandler)}` means
```
onClick={ev => {
    ev.preventDefault();
    myHandler(ev);
}}
```

### `stopped`

Same as `prevented` but `ev.stopPropagation()` is called instead of `ev.preventDefault()`.

### `preventedAndStopped`

Same as above but both `ev.stopPropagation()` and `ev.preventDefault()` are called.

Changelog & Roadmap
-------------------

### v0.1.0

* Initial release.
