const Schema = require('mongoose').Schema
const Model = require('mongoose').model

const schema = new Schema({
   firstName: {
      type: String
   },
   lastName: {
      type: String
   },
   username: {
      type: String
   },
   email: {
      type: String
   },
   phone: {
      type: String
   },
   password: {
      type: String,
      select: false
   }
})
module.exports = Model('User', schema)