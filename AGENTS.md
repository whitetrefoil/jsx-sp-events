# AGENTS.md

## Project overview

This repository publishes a tiny ESM helper library for JSX event handlers. Runtime code lives in `src/main.ts`, build output is emitted to `lib/`, and tests in `tests/` are intentionally kept in the published package as executable documentation.

## Code and API rules

- Keep the public API limited to the current helper set: `prevented`, `stopped`, `stoppedAndPrevented`, plus the exported aliases.
- For optional arguments, only `undefined` means "no handler provided". Do not add `null` as a supported empty value.
- Wrapped handlers must preserve the current contract: run the event side effect first, pass the original event object through unchanged, and bind `this` to `ev.currentTarget`.

## Testing rules

- Keep tests in English.
- Treat tests as both verification and published examples.
- When changing wrapper behavior, cover direct-call usage, zero-argument usage, wrapped-handler invocation, `this` binding, original event forwarding, and call order.

## Tooling conventions

- The package uses Node ESM only.
- Internal test imports use the package import subpath mapping `#/* -> ./src/*` from `package.json`.
- Keep build and test configuration aligned with that mapping; avoid reintroducing `vite-tsconfig-paths` unless native subpath resolution stops working.

## Documentation rules

- Human-facing docs in this repository are written in English.
- If package contents, import conventions, or API edge-case semantics change, update both `README.md` and this file in the same change.
