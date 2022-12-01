"use strict";
exports.__esModule = true;
exports.CONFIG = void 0;
var app_root_path_1 = require("app-root-path");
var dotenv = require("dotenv");
dotenv.config();
var path;
switch (process.env.NODE_ENV) {
    case 'test':
        path = app_root_path_1["default"].path + "/env/.env.test";
        break;
    case 'production':
        path = app_root_path_1["default"].path + "/env/.env.production";
        break;
    case 'development':
        path = app_root_path_1["default"].path + "/env/.env.development";
        break;
    case 'local':
        path = app_root_path_1["default"].path + "/env/.env.local";
        break;
    case 'staging':
        path = app_root_path_1["default"].path + "/env/.env.staging";
        break;
    default:
        path = app_root_path_1["default"].path + "/env/.env.development";
        break;
}
var env = dotenv.config({ path: path });
exports.CONFIG = env.parsed;
