"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompareInternal = /** @class */ (function () {
    function CompareInternal(primary_array) {
        this.first_array = [];
        this.second_array = [];
        this.fields = [];
        this.first_array = primary_array;
    }
    CompareInternal.prototype.to = function (array_to_compare) {
        this.second_array = array_to_compare;
        return this;
    };
    CompareInternal.prototype.with = function (property_name_if_element_object) {
        if (typeof property_name_if_element_object === "string") {
            this.fields.push(property_name_if_element_object);
        }
        else {
            for (var i = 0; i < property_name_if_element_object.length; i++) {
                this.fields.push(property_name_if_element_object[i]);
            }
        }
        return this;
    };
    CompareInternal.prototype.equal = function () {
        return this._compare() === 0;
    };
    CompareInternal.prototype.satisfy = function () {
        if (this.second_array.length > 0) {
            return this._compare() === this.second_array.length;
        }
        else {
            return this._compare() === this.fields.length;
        }
    };
    CompareInternal.prototype._compare = function () {
        var _diff = 0;
        for (var i = 0; i < this.first_array.length; i++) {
            var first = this.first_array[i];
            var internal_match = 0;
            if (this.second_array.length > 0) {
                for (var j = 0; j < this.second_array.length; j++) {
                    var second = this.second_array[j];
                    if (this.fields.length > 0) {
                        for (var k = 0; k < this.fields.length; k++) {
                            var field = this.fields[k];
                            var first_v = first[field];
                            var second_v = second[field];
                            if (first_v === second_v) {
                                internal_match++;
                                break;
                            }
                        }
                    }
                    else {
                        if (first === second) {
                            internal_match++;
                            break;
                        }
                    }
                }
            }
            else {
                var keys = Object.keys(first);
                for (var k = 0; k < this.fields.length; k++) {
                    var field = this.fields[k];
                    if (keys.includes(field)) {
                        internal_match++;
                    }
                }
            }
            if (internal_match > 0) {
                _diff++;
            }
        }
        return _diff;
    };
    return CompareInternal;
}());
function compare(primary_array) {
    return new CompareInternal(primary_array);
}
exports.default = compare;
//# sourceMappingURL=Compare.js.map