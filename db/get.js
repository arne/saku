const Database = require('better-sqlite3')
let db = new Database('./db/example.db')

const actions = {
  all() {
    return db.prepare('SELECT * FROM posts ORDER BY updated DESC').all()
  },
  allFromType(type) {
    return db.prepare('SELECT * FROM posts WHERE type = (?)').all(type)
  }
}

module.exports = actions
