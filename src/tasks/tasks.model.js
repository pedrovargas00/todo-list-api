const Schema = require('mongoose').Schema
const Model = require('mongoose').model
const ObjectId = require('mongoose').Types.ObjectId
const Messages = require('./tasks.messages')

const schema = new Schema({
    
    userId: {
        type: ObjectId
    },

    name: {
        type: String
    },

    date: {
        type: Date
    },

    description: {
        type: String
    },

    category: {
        type: String,
        enum: ['Home', 'Work', 'School']
    },

    label: {
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

module.exports = Model('Task', schema)