const Database = require('better-sqlite3')
let db = new Database('./db/example.db')

const actions = {
  newPost(item) {
    switch (item.type) {
      case 'link':
        let link = db.prepare(
          'INSERT INTO posts (type, title, content, url, created, updated) VALUES (:type, :title, :content, :url, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        )
        link.run(item)
        break
      case 'full':
        let full = db.prepare(
          'INSERT INTO posts (type, title, content, created, updated) VALUES (:type, :title, :content, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        )
        full.run(item)
        break
      case 'image':
        console.log('Image posts are not implemented yet')
        break
      case 'note':
        let note = db.prepare(
          'INSERT INTO posts (type, content, created, updated) VALUES (:type, :content, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        )
        note.run(item)
        break
      default:
        console.log('incorrect input')
    }
  }
}

module.exports = actions
