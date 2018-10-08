const db = require('../db')

const ctr = {
  index: function(ctx) {
    return ctx.render('index', {
      title: 'hello',
      settings: db.settings.get(),
      posts: db.all()
    })
  },
  archive: function(ctx) {
    return (ctx.body = 'not done')
  }
}

module.exports = ctr
