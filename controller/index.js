const db = require('../db')

const ctr = {
  index: function(ctx) {
    return ctx.render('index', {
      title: 'hello',
      settings: db.settings,
      posts: db.all()
    })
  },
  create: function(ctx) {
    return ctx.render('create', {
      title: 'hello',
      settings: db.settings,
      posts: db.all()
    })
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
      default:
        return (ctx.body = 'Unknown post type')
    }
  }
}

module.exports = ctr
