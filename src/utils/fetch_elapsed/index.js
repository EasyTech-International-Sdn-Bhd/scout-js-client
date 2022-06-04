"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchElapsed = void 0;
var FetchElapsed = /** @class */ (function () {
    function FetchElapsed() {
        this.start = new Date().getTime();
    }
    FetchElapsed.prototype.elapsed = function () {
        this.end = new Date().getTime();
        var diff = this.end - this.start;
        return "".concat(diff.toFixed(2), "ms");
    };
    return FetchElapsed;
}());
exports.FetchElapsed = FetchElapsed;
function performance() {
    return new FetchElapsed();
}
exports.default = performance;
//# sourceMappingURL=index.js.map