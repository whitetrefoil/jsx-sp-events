"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stopped(evOrHandler) {
    if (evOrHandler == null) {
        return function (ev) { ev.stopPropagation(); };
    }
    if (typeof evOrHandler === 'function') {
        return function (ev) {
            ev.stopPropagation();
            return evOrHandler(ev);
        };
    }
    evOrHandler.stopPropagation();
}
exports.stopped = stopped;
function prevented(evOrHandler) {
    if (evOrHandler == null) {
        return function (ev) { ev.preventDefault(); };
    }
    if (typeof evOrHandler === 'function') {
        return function (ev) {
            ev.preventDefault();
            return evOrHandler(ev);
        };
    }
    evOrHandler.preventDefault();
}
exports.prevented = prevented;
function preventedAndStopped(evOrHandler) {
    if (evOrHandler == null) {
        return function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
        };
    }
    if (typeof evOrHandler === 'function') {
        return function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            return evOrHandler(ev);
        };
    }
    evOrHandler.preventDefault();
    evOrHandler.stopPropagation();
}
exports.preventedAndStopped = preventedAndStopped;
//# sourceMappingURL=preact.js.map