const Router = require('koa-router')
const router = new Router()
const ctr = require('../controller')
const adminCtr = require('../controller/admin')

router.get(     '/',                async ctx => ctr.index(ctx))
router.get(     '/admin',           async ctx => adminCtr.index(ctx))
router.get(     '/admin/create',    async ctx => adminCtr.create(ctx))
router.post(    '/admin/new',       async ctx => adminCtr.new(ctx))
router.get(     '/admin/settings',  async ctx => adminCtr.settings(ctx))
router.post(    '/admin/settings',  async ctx => adminCtr.update_settings(ctx))

module.exports = router
