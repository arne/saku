const Database = require('better-sqlite3-helper')
let db = Database()

const actions = {
  newPost(item) {
    switch (item.type) {
      case 'link':
        return db
          .prepare(
            'INSERT INTO posts (type, title, content, url, slug, created, updated) VALUES (:type, :title, :content, :url, :slug, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
          )
          .run(item)
      case 'full':
        return db
          .prepare(
            'INSERT INTO posts (type, title, content, slug, created, updated) VALUES (:type, :title, :content, :slug, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
          )
          .run(item)
      case 'image':
        console.log('Image posts are not implemented yet')
        break
      case 'note':
        return db
          .prepare(
            'INSERT INTO posts (type, content, slug, created, updated) VALUES (:type, :content, :slug, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);'
          )
          .run(item)
      default:
        throw 'Unknown type: ' + item.type
    }
  }
}

module.exports = actions
