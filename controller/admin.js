const db = require('../db')


const ctr = {
  index: function(ctx) {
    return ctx.render('admin', {
      settings: db.settings,
    });
  },
  create: function(ctx) {
    return ctx.render('create', {
      title: 'hello',
      settings: db.settings,
      posts: db.all()
    })
  },
  settings: function(ctx) {
    return ctx.render('admin/settings', { settings: db.settings })
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