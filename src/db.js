const Mongoose = require('mongoose')
const Config = require('./config')

module.exports = async function() {
    try {
       await Mongoose.connect(Config.MONGODB)
       return console.log(`[DATABASE] ${ Config.MONGODB }`)
    } catch(error) {
       console.log(`[DATABASE ERROR] ${ Config.MONGODB }`)
       throw error
    }
}