"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Distinct = /** @class */ (function () {
    function Distinct(key) {
        this.length = 0;
        this.distinctKey = '';
        this.primaryArray = [];
        this.distinctKey = key;
    }
    Distinct.prototype.at = function (index) {
        return index === -1 ? undefined : this.primaryArray[index];
    };
    Distinct.prototype.replaceAt = function (index, value) {
        if (index !== -1) {
            this.primaryArray[index] = value;
        }
    };
    Distinct.prototype.replaceWhere = function (identifier, newVal) {
        var found = this.find(identifier);
        if (found !== -1) {
            this.primaryArray[found] = newVal;
        }
        return false;
    };
    Distinct.prototype.find = function (identifier) {
        var id = Object.keys(identifier)[0];
        var val = identifier[id];
        for (var i = 0; i < this.primaryArray.length; i++) {
            var obj = this.primaryArray[i];
            for (var objKey in obj) {
                // @ts-ignore
                if (obj.hasOwnProperty(objKey) && objKey === id && obj[objKey] === val) {
                    return i;
                }
            }
        }
        return -1;
    };
    Distinct.prototype.get = function () {
        return this.primaryArray;
    };
    Distinct.prototype.push = function (element) {
        if (!(0, index_1.nullish)(element) && this.distinctKey in element) {
            this.filterArray(element);
            this.primaryArray.push(element);
            this.length = this.primaryArray.length;
        }
    };
    Distinct.prototype.deleteWhere = function (key, expected) {
        this.filterArray(this.getWhere(key, expected));
        this.length--;
    };
    Distinct.prototype.getWhere = function (key, expected) {
        for (var i = 0; i < this.primaryArray.length; i++) {
            var obj = this.primaryArray[i];
            for (var objKey in obj) {
                // @ts-ignore
                if (objKey === key && obj[objKey] === expected) {
                    return obj;
                }
            }
        }
        return null;
    };
    Distinct.prototype.clear = function () {
        this.primaryArray = [];
    };
    Distinct.prototype.copy = function (new_source) {
        for (var i = 0; i < new_source.length; i++) {
            this.push(new_source[i]);
        }
    };
    Distinct.prototype.toString = function () {
        return JSON.stringify(this.primaryArray);
    };
    Distinct.prototype.sort = function (key, options) {
        var _this = this;
        // @ts-ignore
        this.primaryArray = this.primaryArray.sort(function (a, b) { return _this.$sort(a[key], b[key], options); });
    };
    // @ts-ignore
    Distinct.prototype.$sort = function (a, b, _options) {
        var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, sre = /(^[ ]*|[ ]*$)/g, dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/, hre = /^0x[0-9a-f]+$/i, ore = /^0/, options = _options || { insensitive: true, desc: false }, // @ts-ignore
        // tslint:disable-next-line:only-arrow-functions
        i = function (s) { return options.insensitive && ('' + s).toLowerCase() || '' + s; }, 
        // convert all to strings strip whitespace
        x = i(a).replace(sre, '') || '', y = i(b).replace(sre, '') || '', 
        // chunk/tokenize
        xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'), yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'), 
        // @ts-ignore
        xD = parseInt(x.match(hre)) || (xN.length !== 1 && x.match(dre) && Date.parse(x)), 
        // @ts-ignore
        yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null, oFxNcL, oFyNcL, mult = options.desc ? -1 : 1;
        // first try and sort Hex codes or Dates
        if (yD) // @ts-ignore
            if (xD < yD)
                return -1 * mult; // @ts-ignore
            else if (xD > yD)
                return 1 * mult;
        // natural sorting through split numeric strings and default strings
        for (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
            // find floats not starting with '0', string or 0 if not defined (Clint Priest)
            oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
            oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
            // @ts-ignore
            if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
                return (isNaN(oFxNcL) ? 1 : -1) * mult;
            }
            // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
            else if (typeof oFxNcL !== typeof oFyNcL) {
                oFxNcL += '';
                oFyNcL += '';
            }
            if (oFxNcL < oFyNcL)
                return -1 * mult;
            if (oFxNcL > oFyNcL)
                return 1 * mult;
        }
        return 0;
    };
    Distinct.prototype.filterArray = function (element) {
        var _this = this;
        this.primaryArray = this.primaryArray.filter(function (item, index) {
            if (item[_this.distinctKey] !== element[_this.distinctKey]) {
                return item;
            }
        });
    };
    return Distinct;
}());
exports.default = Distinct;
//# sourceMappingURL=Distinct.js.map