const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api/product', {
            target: "https://eunoiamiaapi.herokuapp.com",
            changeOrigin: true
        })
    )
}