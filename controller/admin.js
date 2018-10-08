const db = require('../db')

const ctr = {
  index: function(ctx) {
    return ctx.render('admin', {
      settings: db.settings.get()
    })
  },
  create: function(ctx) {
    return ctx.render('admin/create', {
      title: 'hello',
      settings: db.settings.get(),
      posts: db.all()
    })
  },
  update_settings: function(ctx) {
    db.settings.update(ctx.request.body)
    return ctx.render('admin/settings', {
      message: 'Settings saved',
      settings: db.settings.get()
    })
  },
  settings: function(ctx) {
    return ctx.render('admin/settings', { settings: db.settings.get() })
  },
  new: function(ctx) {
    let payload = ctx.request.body
    switch (payload.type) {
      case 'link':
        if (!payload.url || !payload.title)
          return (ctx.body = 'A link post requires a url and title')
        if (!payload.content) payload.content = null
        break
      case 'note':
        if (!payload.content) return (ctx.body = 'You need some content.')
        break
      case 'full':
        if (!payload.content || !payload.title)
          return (ctx.body = 'You need a title and content.')
        break
      default:
        return (ctx.body = 'Unknown post type')
    }
    if (payload.title) {
      payload.slug = ctx.state.utils.slugify(payload.title, {
        replacement: '-',
        remove: /[*+~.()'"!?:@]/g,
        lower: true
      })
    } else {
      payload.slug = ctx.state.utils.moment().format('H-mm-ss')
    }
    db.newPost(payload)
    return (ctx.body = 'Published ' + payload.type)
  }
}

module.exports = ctr
