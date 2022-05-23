const Schema = require('mongoose').Schema
const Model = require('mongoose').model
const ObjectId = require('mongoose').Types.ObjectId
const Messages = require('./subtasks.messages')

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
    },

    updated: {
        type: Date
    },

    created: {
        type: Date,
        default: Date.now
    }
})

schema.post('save', function(error, doc, next) {
    if(error) return next(Messages(error).userSaveError)
    next()
})

schema.post('findOne', function(error, doc, next) {
    if(error) return next(Messages(error).userGetError)
    next()
})

schema.post('find', function(error, doc, next) {
    if(error) return next(Messages(error).userGetError)
    next()
})

schema.post('remove', function(error, doc, next) {
    if(error) return next( Messages(error).userDeleteError )
    next()
})

module.exports = Model('Subtask', schema)