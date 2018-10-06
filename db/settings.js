const Database = require('better-sqlite3-helper')
let db = Database()

const settings = db
  .prepare('SELECT * FROM settings')
  .all()
  .reduce(function(c, obj) {
    c[obj['key']] = obj['value']
    return c
  }, {})
module.exports = settings
