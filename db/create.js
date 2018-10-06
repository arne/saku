const Database = require('better-sqlite3')
let db = new Database('./db/example.db')

const actions = {
  newPost(item) {
    switch (item.type) {
      case 'link':
        console.log(item)
        let link = db.prepare(
          'INSERT INTO posts (type, title, content, url, created, updated) VALUES (:type, :title, :content, :url, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        )
        link.run(item)
        break
      case 'full':
        console.log('full')
        break
      case 'image':
        console.log('image')
        break
      case 'note':
        console.log('note')
        break
      default:
        console.log('incorrect input')
    }
  }
}

module.exports = actions
