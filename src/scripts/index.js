"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute_shell = exports.uuidV4 = exports.readable = exports.compare_shallow = exports.rename_prop = exports.noop = exports.nullish = void 0;
var lodash_1 = require("lodash");
var buffer_1 = require("buffer");
var cProcess = require("child_process");
var nullish = function (content) {
    return (0, lodash_1.isEmpty)(content) ||
        (0, lodash_1.isNull)(content) ||
        (0, lodash_1.isNil)(content) ||
        (0, lodash_1.isNaN)(content) ||
        (0, lodash_1.isUndefined)(content);
};
exports.nullish = nullish;
var noop = function (content) {
    return (0, lodash_1.isUndefined)(content) ? undefined : true;
};
exports.noop = noop;
function rename_prop(obj, old_prop, new_prop) {
    var new_obj = {};
    for (var objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            var found = -1;
            for (var i = 0; i < old_prop.length; i++) {
                var oldKey = old_prop[i];
                if (oldKey === objKey) {
                    found = i;
                }
            }
            if (found !== -1) {
                var newKey = new_prop[found];
                new_obj[newKey] = obj[objKey];
            }
            else {
                new_obj[objKey] = obj[objKey];
            }
        }
    }
    return new_obj;
}
exports.rename_prop = rename_prop;
var compare_shallow = function (after, before) {
    for (var key in after) {
        if (!(key in after) || after[key] !== before[key]) {
            return false;
        }
    }
    for (var key in before) {
        if (!(key in after) || after[key] !== before[key]) {
            return false;
        }
    }
    return true;
};
exports.compare_shallow = compare_shallow;
var readable = function (obj) {
    for (var objKey in obj) {
        if (obj.hasOwnProperty(objKey)) {
            if (typeof obj[objKey] === 'number') {
                obj[objKey] = parseFloat(parseFloat(obj[objKey]).toFixed(3));
            }
            if (buffer_1.Buffer.isBuffer(obj[objKey])) {
                obj[objKey] = obj[objKey].toString('utf8');
            }
        }
    }
    return obj;
};
exports.readable = readable;
var uuidV4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
exports.uuidV4 = uuidV4;
var execute_shell = function (path) {
    return new Promise(function (resolve) {
        cProcess.exec(path, resolve);
    });
};
exports.execute_shell = execute_shell;
//# sourceMappingURL=index.js.map