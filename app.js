const Koa = require('koa')
const views = require('koa-views')
const serveSass = require('koa.sass')
const serveStatic = require('koa-static')
const mount = require('koa-mount')

const CONFIG = require('./config')
const rootRoutes = require('./routes')

const app = new Koa()
app.use(
  views(__dirname + '/views', {
    map: {
      html: 'pug'
    }
  })
)

app.use(
  serveSass({
    mountAt: '/public/css',
    src: './assets/sass',
    dest: './.tmp/sass',
    debug: true
  })
)

app.use(mount('/public', serveStatic('./assets/')))

app.use(rootRoutes.routes())
const server = app.listen(CONFIG.port, () => {
  console.log(`Server listening on port: ${CONFIG.port}`)
})

module.exports = server
