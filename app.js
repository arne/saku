const Koa = require('koa')
const auth = require('koa-basic-auth');
const bodyParser = require('koa-bodyparser')
const mount = require('koa-mount')
const serveSass = require('koa.sass')
const serveStatic = require('koa-static')
const utils = require('./controller/utils')
const views = require('koa-views')

const CONFIG = require('./config')
const rootRoutes = require('./routes')

const app = new Koa()


app.use(mount('/admin', auth({ name: 'saku', pass: CONFIG.password })));

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
