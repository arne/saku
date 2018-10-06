const Database = require('better-sqlite3-helper')
let db = Database()

const actions = {
  all() {
    return db.query('SELECT * FROM posts ORDER BY updated DESC');
  },
  allFromType(type) {
    return db.query('SELECT * FROM posts WHERE type = (?)', type)
  }
}

module.exports = actions
