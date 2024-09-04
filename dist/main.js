"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const app = (0, express_1.default)();
app.get("/", (_, res) => res.json({ message: "Hello World from API-Gateway" }));
app.use("/users-services", (0, http_proxy_middleware_1.createProxyMiddleware)({ target: "http://108.136.118.28:8002/forumapp/api/v1/users-services" }));
app.use("/threads-services", (0, http_proxy_middleware_1.createProxyMiddleware)({ target: "http://localhost:8001" }));
app.use("/replies-services", (0, http_proxy_middleware_1.createProxyMiddleware)({ target: "http://localhost:8000" }));
app.listen(3001, () => {
    console.log("users service listening on port 3000");
});
