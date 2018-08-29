const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dbkeylive', { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose