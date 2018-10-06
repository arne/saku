const Database = require('better-sqlite3')
let db = new Database('./db/example.db')

const settings = db
  .prepare('SELECT * FROM settings')
  .all()
  .reduce(function(c, obj) {
    c[obj['key']] = obj['value']
    return c
  }, {})
module.exports = settings
