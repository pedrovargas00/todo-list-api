const Schema = require('mongoose').Schema
const Model = require('mongoose').model
const ObjectId = require('mongoose').Types.ObjectId

const schema = new Schema({
   taskId: {
      type: ObjectId
   },
   name: {
      type: String
   },
   description: {
      type: String
   },
   status: {
      type: String,
      enum: ['enabled', 'completed'],
      default: 'enabled'
   }
})