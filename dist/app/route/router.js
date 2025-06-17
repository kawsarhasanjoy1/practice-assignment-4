"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = __importDefault(require("../modules/user/route"));
const route_2 = __importDefault(require("../modules/auth/route"));
const route_3 = __importDefault(require("../modules/book/route"));
const router = (0, express_1.Router)();
const routerPath = [
    {
        path: "/users",
        route: route_1.default,
    },
    {
        path: "/auth",
        route: route_2.default,
    },
    {
        path: "/books",
        route: route_3.default,
    },
];
routerPath.map((route) => router.use(route.path, route.route));
exports.default = router;
