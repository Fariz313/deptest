"use strict";
exports.__esModule = true;
exports.Kernel = void 0;
var express_1 = require("express");
var config_1 = require("@util/config/config");
var logger_1 = require("@util/logger/logger");
var cub_app_use_1 = require("./cub.app.use");
var Kernel = /** @class */ (function () {
    function Kernel() {
        this.defaultServices = (0, express_1["default"])();
        this.appUse = new cub_app_use_1.CubAppUse(this.defaultServices);
        this.config = config_1.CONFIG;
        this.dbUrl = config_1.CONFIG.MONGO_DB_URL;
    }
    Kernel.prototype.appService = function () {
        var _this = this;
        console.log(this.config);
        this.defaultServices.listen(this.config.PORT, function () {
            var _a;
            logger_1.logger.info("run on ".concat((_a = _this.config.APP_ENV) !== null && _a !== void 0 ? _a : 'development'));
            logger_1.logger.info("Server Started!, running app: ".concat(_this.config.NAME, " Express: http://localhost:").concat(_this.config.PORT));
        });
    };
    return Kernel;
}());
exports.Kernel = Kernel;
