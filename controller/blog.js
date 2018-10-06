const db = require('../db')
const settings = db.settings.get()
console.log(settings.name)
const ctr = {
  index: function(ctx) {
    return ctx.render('index', {
      title: settings.name,
      settings: settings,
      posts: db.all()
    })
  }
}

module.exports = ctr
