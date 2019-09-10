export function stopped(evOrHandler) {
    if (evOrHandler == null) {
        return (ev) => { ev.stopPropagation(); };
    }
    if (typeof evOrHandler === 'function') {
        return (ev) => {
            ev.stopPropagation();
            return evOrHandler(ev);
        };
    }
    evOrHandler.stopPropagation();
}
export function prevented(evOrHandler) {
    if (evOrHandler == null) {
        return (ev) => { ev.preventDefault(); };
    }
    if (typeof evOrHandler === 'function') {
        return (ev) => {
            ev.preventDefault();
            return evOrHandler(ev);
        };
    }
    evOrHandler.preventDefault();
}
export function preventedAndStopped(evOrHandler) {
    if (evOrHandler == null) {
        return (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
        };
    }
    if (typeof evOrHandler === 'function') {
        return (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            return evOrHandler(ev);
        };
    }
    evOrHandler.preventDefault();
    evOrHandler.stopPropagation();
}
//# sourceMappingURL=preact.js.map