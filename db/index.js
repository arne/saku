const CONFIG = require('../config')
const Database = require('better-sqlite3-helper')

console.log("Set me up the"+CONFIG.db_path);
let DB = Database({
  path: CONFIG.db_path,
  WAL: true
})
const get = require('./get')
const create = require('./create')
const settings = require('./settings')

const db = Object.assign(get, create, { settings: settings })

module.exports = db
