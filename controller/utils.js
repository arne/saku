const moment = require('moment')
const Remarkable = require('remarkable')
const slugify = require('slugify')
const md = new Remarkable()

const utils = {
  moment: moment,
  md: md,
  slugify: slugify
}

module.exports = utils
