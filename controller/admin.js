const db = require('../db')


const ctr = {
  index: function(ctx) {
    return ctx.render('admin', {
      settings: db.settings.get(),
    });
  },
  create: function(ctx) {
  return ctx.render('admin/create', {
      title: 'hello',
      settings: db.settings.get(),
      posts: db.all()
    })
  },
  update_settings: function(ctx) {
    db.settings.update(ctx.request.body);
    return ctx.render('admin/settings', {
      message: 'Settings saved',
      settings: db.settings.get()
    })
  },
  settings: function(ctx) {
    return ctx.render('admin/settings', { settings: db.settings.get() })
  },
  new: function(ctx) {
    console.log(ctx.request.body)
    let payload = ctx.request.body
    switch (payload.type) {
      case 'link':
        if (!payload.url || !payload.title)
          return (ctx.body = 'A link post requires a url and title')
        if (!payload.content) payload.content = null
        db.newPost(payload)
        return (ctx.body = 'Added link post')
      case 'note':
        if (!payload.content) return (ctx.body = 'You need some content.')
        db.newPost(payload)
        return (ctx.body = 'Added note')
      case 'full':
        if (!payload.content || !payload.title)
          return (ctx.body = 'You need a title and content.')
        db.newPost(payload)
        return (ctx.body = 'Added full post')
      default:
        return (ctx.body = 'Unknown post type')
    }
  }
}

module.exports = ctr
