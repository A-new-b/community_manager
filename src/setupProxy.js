const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://39.106.73.59:8081',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/api": "/api"
        }
    }))
};