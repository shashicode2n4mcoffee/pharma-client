// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/v1/*',
    createProxyMiddleware({
      target: 'https://bored-gold-flip-flops.cyclic.app/api/v1',
      // target: 'http://localhost:8081/api/v1',
      changeOrigin: true,
    })
  )
}
