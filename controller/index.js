const admin = require('./admin')
const blog = require('./blog')

const ctr = Object.assign({ admin: admin }, { blog: blog })

module.exports = ctr
