import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/users-services", createProxyMiddleware({ target: "http://localhost:8002" }));

app.use("/threads-services", createProxyMiddleware({ target: "http://localhost:8001" }));

app.use("/replies-services", createProxyMiddleware({ target: "http://localhost:8000" }));

app.listen(3000, () => {
  console.log("users service listening on port 3000");
});
