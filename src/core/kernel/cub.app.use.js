"use strict";
exports.__esModule = true;
exports.CubAppUse = void 0;
var logger_1 = require("@util/logger/logger");
var express_1 = require("express");
var uuidv4_1 = require("uuidv4");

var CubAppUse = /** @class */ (function () {
    function CubAppUse(app) {
        this.app = app;
        this.setup();
        this.requestLogger();
    }
    CubAppUse.serialize = function (obj) {
        var str = '?' + Object.keys(obj).reduce(function (a, k) {
            a.push(k + '=' + encodeURIComponent(obj[k]));
            return a;
        }, []).join('&');
        return str;
    };
    CubAppUse.prototype.setup = function () {
        logger_1.logger.info('setup cub apps called');
        this.app.disable('x-powered-by');
        this.app.use(express_1["default"].urlencoded({
            extended: true
        }));
    };
    CubAppUse.prototype.enableCors = function () {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    };
    CubAppUse.prototype.getLoggerForStatusCode = function (statusCode) {
        if (statusCode >= 500) {
            // tslint:disable-next-line: no-console
            return console.error.bind(console);
        }
        if (statusCode >= 400) {
            // tslint:disable-next-line: no-console
            return console.warn.bind(console);
        }
        // tslint:disable-next-line: no-console
        return console.log.bind(console);
    };
    CubAppUse.prototype.requestLogger = function () {
        var _this = this;
        this.app.use(function (req, res, next) {
            req.requestId = (0, uuidv4_1.uuid)();
            var cleanup = function () {
                res.removeListener('finish', logFn);
                res.removeListener('close', abortFn);
                res.removeListener('error', errorFn);
            };
            var logFn = function () {
                cleanup();
                var loggers = _this.getLoggerForStatusCode(res.statusCode);
                loggers("[".concat(req.requestId, "]  ").concat(new Date().toISOString(), " - ").concat(res.statusCode, " ").concat(res.statusMessage, "; ").concat(res.get('Content-Length') || 0, "b sent"));
            };
            var abortFn = function () {
                cleanup();
                logger_1.logger.warn('Request aborted by the client');
            };
            var errorFn = function (err) {
                cleanup();
                logger_1.logger.warn("Request pipeline error: ".concat(err));
            };
            res.on('finish', logFn); // successful pipeline (regardless of its response)
            res.on('close', abortFn); // aborted pipeline
            res.on('error', errorFn); // pipeline internal error
            next();
        });
    };
    return CubAppUse;
}());
exports.CubAppUse = CubAppUse;
