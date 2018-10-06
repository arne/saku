const Database = require('better-sqlite3-helper')
let db = Database()

const actions = {
  newPost(item) {
    switch (item.type) {
      case 'link':
        db.prepare(
          'INSERT INTO posts (type, title, content, url, created, updated) VALUES (:type, :title, :content, :url, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        ).run(item)
        break
      case 'full':
        db.prepare(
          'INSERT INTO posts (type, title, content, created, updated) VALUES (:type, :title, :content, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        ).run(item)
        break
      case 'image':
        console.log('Image posts are not implemented yet')
        break
      case 'note':
        db.prepare(
          'INSERT INTO posts (type, content, created, updated) VALUES (:type, :content, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
        ).run(item)
        break
      default:
        throw 'Unknown type: ' + item.type
    }
  }
}

module.exports = actions
