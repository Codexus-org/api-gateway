import express from "express";
import cookieParser from "cookie-parser";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(cookieParser());

app.use("/auth",
  createProxyMiddleware({
    target: "http://localhost:8002/forumapp/api/v1/auth",
  })
);

app.use("/users-services",
  createProxyMiddleware({
    target: "http://localhost:8002/forumapp/api/v1/users-services",
  })
);

app.use("/threads-services",
  createProxyMiddleware({ 
    target: "http://localhost:8001/forumapp/api/v1/threads-services",
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
