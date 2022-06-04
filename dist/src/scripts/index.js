"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullish = void 0;
var lodash_1 = require("lodash");
var nullish = function (content) {
    return (0, lodash_1.isEmpty)(content) ||
        (0, lodash_1.isNull)(content) ||
        (0, lodash_1.isNil)(content) ||
        (0, lodash_1.isNaN)(content) ||
        (0, lodash_1.isUndefined)(content);
};
exports.nullish = nullish;
//# sourceMappingURL=index.js.map