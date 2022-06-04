"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = require("fancy-log");
var chalk = require("chalk");
var Debug = /** @class */ (function () {
    function Debug(logging_tag) {
        this._save_log = true;
        this._tag = '[Scout-Js-Client]';
        this.tag = logging_tag;
    }
    Object.defineProperty(Debug.prototype, "save_log", {
        get: function () {
            return this._save_log;
        },
        set: function (value) {
            this._save_log = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Debug.prototype, "tag", {
        get: function () {
            return "[".concat(new Date().toLocaleTimeString(), "] ").concat(this._tag);
        },
        set: function (value) {
            this._tag = value;
        },
        enumerable: false,
        configurable: true
    });
    Debug.prototype.error = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        log.info.apply(log, __spreadArray([chalk.whiteBright.bold.bgRedBright("[".concat(this.tag, "]"))], param, false));
    };
    Debug.prototype.info = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        log.info.apply(log, __spreadArray(["[".concat(this.tag, "]")], param, false));
    };
    Debug.prototype.done = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        log.info.apply(log, __spreadArray([chalk.whiteBright.bold.bgGreenBright("[".concat(this.tag, "]"))], param, false));
    };
    return Debug;
}());
function debug(logging_tag) {
    return new Debug(logging_tag);
}
exports.default = debug;
//# sourceMappingURL=index.js.map