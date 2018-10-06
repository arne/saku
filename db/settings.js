const Database = require('better-sqlite3')
let db = new Database('./db/example.db')

const settings = {
  get () {
    return db.prepare('SELECT * FROM settings')
    .all()
    .reduce(function(c, obj) {
      c[obj['key']] = obj['value']
      return c
      }, {})
  },
  update(settings) {
        let stmt= db.prepare('UPDATE settings SET value=:value WHERE key=:key');
        for( var key in settings) {
        	stmt.run({"key": key, "value": settings[key]});
				}
  }
}
module.exports = settings
