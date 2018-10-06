require('dotenv').config() //instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.name           = process.env.NAME            || 'Default Name'
CONFIG.email          = process.env.EMAIL           || 'mail@example.com'
CONFIG.site           = process.env.SITE            || 'https://example.com'
CONFIG.password       = process.env.PASSWORD        || 'saku'

CONFIG.app            = process.env.APP             || 'dev'
CONFIG.port           = process.env.PORT            || '3000'

CONFIG.db_path        = process.env.DB_HOST         || './db/saku.db'


module.exports = CONFIG
