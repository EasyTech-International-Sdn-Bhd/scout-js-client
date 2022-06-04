"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatter_1 = require("./formatter");
var strtotime_1 = require("./strtotime");
function date(input, format) {
    return (0, formatter_1.default)(format ? format : "Y-m-d", (0, strtotime_1.default)(input));
}
exports.default = date;
//# sourceMappingURL=index.js.map