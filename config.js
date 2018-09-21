require('dotenv').config() //instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.name           = process.env.NAME            || 'Default Name'
CONFIG.email          = process.env.EMAIL           || 'mail@example.com'
CONFIG.site           = process.env.SITE            || 'https://example.com'

CONFIG.app            = process.env.APP             || 'dev'
CONFIG.port           = process.env.PORT            || '3000'

CONFIG.db_host        = process.env.DB_HOST         || 'localhost'
CONFIG.db_port        = process.env.DB_PORT         || '3306'
CONFIG.db_name        = process.env.DB_NAME         || 'name'
CONFIG.db_user        = process.env.DB_USER         || 'user'
CONFIG.db_password    = process.env.DB_PASS         || 'db-password'

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION  || 'token-password'
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION  || '1000'

module.exports = CONFIG
