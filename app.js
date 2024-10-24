"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var _a = (0, react_1.useState)(false), menuOpen = _a[0], setMenuOpen = _a[1];
var toggleMenu = function () {
    setMenuOpen(!menuOpen);
};
