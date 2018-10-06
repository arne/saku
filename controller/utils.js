const moment = require('moment')
const Remarkable = require('remarkable')
const md = new Remarkable()

const utils = {
  moment: moment,
  md: md
}

module.exports = utils
