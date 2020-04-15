const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:4000",
      pathRewrite: (path) => {
        if (path === "/api/employees") {
          return "/employees/all.json";
        }
        return "/employees/filtered.json";
      },
    })
  );
};
