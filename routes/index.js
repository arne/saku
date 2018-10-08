const Router = require('koa-router')
const router = new Router()
const ctr = require('../controller')

router.get(     '/admin',           async ctx => ctr.admin.index(ctx))
router.get(     '/admin/create',    async ctx => ctr.admin.create(ctx))
router.post(    '/admin/new',       async ctx => ctr.admin.new(ctx))
router.get(     '/admin/settings',  async ctx => ctr.admin.settings(ctx))
router.post(    '/admin/settings',  async ctx => ctr.admin.update_settings(ctx))
router.get(     '/',                async ctx => ctr.blog.index(ctx))
router.get(     '/:y/:m/:slug',     async ctx => ctr.blog.archive(ctx))
router.get(     '/:y/:m',           async ctx => ctr.blog.archive(ctx))
router.get(     '/:y',              async ctx => ctr.blog.archive(ctx))

module.exports = router
