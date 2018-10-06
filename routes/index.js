const Router = require('koa-router')
const router = new Router()
const ctr = require('../controller')

router.get(     '/',                async ctx => ctr.blog.index(ctx))
router.get(     '/admin',           async ctx => ctr.admin.index(ctx))
router.get(     '/admin/create',    async ctx => ctr.admin.create(ctx))
router.post(    '/admin/new',       async ctx => ctr.admin.new(ctx))
router.get(     '/admin/settings',  async ctx => ctr.admin.settings(ctx))
router.post(    '/admin/settings',  async ctx => ctr.admin.update_settings(ctx))

module.exports = router
