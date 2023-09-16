const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portfolioSchema = new Schema({
  logo: {type: String},
  home: {type: String},
  contact: {type: String},
  projects: {type: String},
  about: {type: String}
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;