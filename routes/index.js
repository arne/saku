const Router = require('koa-router')
const router = new Router()
const ctr = require('../controller')

router.get(     '/',              async ctx => ctr.index(ctx))
router.get(     '/create',        async ctx => ctr.create(ctx))
router.post(    '/new',           async ctx => ctr.new(ctx))

module.exports = router
