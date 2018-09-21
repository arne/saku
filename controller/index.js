const CONFIG = require('../config')

const ctr = {
  index: function(ctx) {
    return ctx.render('index.pug', {
      title: 'hello',
      config: CONFIG,
      posts: [
        {
          type: 'link',
          title: 'Hello world!',
          content: 'Testing',
          url: '//google.com',
          date: '2018-09-21'
        },
        {
          type: 'short',
          content: 'Just a multiline text',
          date: '2018-09-21'
        }
      ]
    })
  }
}

module.exports = ctr
