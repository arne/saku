const Koa = require('koa')
const views = require('koa-views')
const serveSass = require('koa.sass')
const serveStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const mount = require('koa-mount')
const utils = require('./controller/utils')

const CONFIG = require('./config')
const rootRoutes = require('./routes')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx, next) => {
  ctx.state.utils = utils
  await next()
})

app.use(
  views(__dirname + '/views', {
    map: {
      html: 'pug'
    },
    extension: 'pug'
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
