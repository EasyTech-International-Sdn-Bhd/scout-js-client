"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("./src/scripts/axios");
var api_1 = require("./src/utils/config/api");
var fetch_elapsed_1 = require("./src/utils/fetch_elapsed");
var Scout = /** @class */ (function () {
    function Scout(server_address) {
        this.server_address = "";
        this.server_address = server_address;
        this.api = new axios_1.default(server_address);
    }
    Scout.prototype.indexes = function () {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.get(api_1.ScoutEndPoints.Get_Indexes).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    Scout.prototype.insert = function (object) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.post(api_1.ScoutEndPoints.Post_Insert, object).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    Scout.prototype.bulk_insert = function (object) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.post(api_1.ScoutEndPoints.Post_BulkInsert, object).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    Scout.prototype.update_config = function (object) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.put(api_1.ScoutEndPoints.Put_Config, object).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    Scout.prototype.get_count = function (index) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.get("".concat(api_1.ScoutEndPoints.Get_Count, "/").concat(index), {}).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    Scout.prototype.search = function (query) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.post(api_1.ScoutEndPoints.Post_Search, query).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    Scout.prototype.delete_index = function (name) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.delete("".concat(api_1.ScoutEndPoints.Delete_Index, "/").concat(name)).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    Scout.prototype.delete_index_data = function (name, uid) {
        var _this = this;
        var now = (0, fetch_elapsed_1.default)();
        return new Promise(function (resolve, reject) {
            _this.api.delete("".concat(api_1.ScoutEndPoints.Delete_Index, "/").concat(name, "/").concat(uid)).then(function (_a) {
                var data = _a.data;
                data.fetch = now.elapsed();
                resolve(data);
            }).catch(function (er) {
                reject(er);
            });
        });
    };
    return Scout;
}());
exports.default = Scout;
//# sourceMappingURL=index.js.map