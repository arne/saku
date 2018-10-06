const get = require('./get')
const create = require('./create')
const settings = require('./settings')

const db = Object.assign(get, create, { settings: settings })

module.exports = db
