const Schema = require('mongoose').Schema
const Model = require('mongoose').model
const ObjectId = require('mongoose').Types.ObjectId

const schema = new Schema({
   userID: {
      type: ObjectId
   },
   name: {
      type: String
   },
   date: {
      type: String
   },
   description: {
      type: String
   },
   labels: {
      type: Array
   },
   status: {
      type: String,
      enum: ['enabled', 'completed'],
      default: 'enabled'
   }
})

module.exports = Model('Task', schema)