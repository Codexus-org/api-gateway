import express from "express";
import cookieParser from "cookie-parser";
import { createProxyMiddleware } from "http-proxy-middleware";
import { verifyAccessToken } from "./middlewares/auth.middleware";

const app = express();
app.use(cookieParser());

app.use("/auth",
  createProxyMiddleware({
    target: "http://localhost:8002/forumapp/api/v1/auth",
  })
);

app.use("/users-services",
  verifyAccessToken,
  createProxyMiddleware({
    target: "http://localhost:8002/forumapp/api/v1/users-services",
  })
);

app.use("/threads-services",
  createProxyMiddleware({ 
    target: "http://localhost:8001",
  })
);

app.use("/replies-services",
  createProxyMiddleware({
    target: "http://localhost:8000",
  })
);

app.listen(3001, () => {
  console.log("users service listening on port 3001");
});
