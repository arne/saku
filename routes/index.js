const Router = require('koa-router')
const router = new Router()
const ctr = require('../controller')

router.get(     '/',              async ctx => ctr.index(ctx))

module.exports = router
