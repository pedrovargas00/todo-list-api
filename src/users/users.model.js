const Schema = require('mongoose').Schema
const Model = require('mongoose').model
const Messages = require('./users.messages')
const Encrypt = require('../encrypt')

const schema = new Schema({
    firstName: {
        type: String
    },
    
    lastName: {
        type: String
    },
    
    name: {
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
    },
    
    updated: {
        type: Date
    },
    
    created: {
        type: Date,
        default: Date.now
    }
})

schema.pre('save', function(next) {

    this.name = `${ this.firstName} ${ this.lastName }`
    this.updated = new Date()

    if (this.password)
        this.password = Encrypt.bcryptHash(this.password)
    next()
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

module.exports = Model('User', schema)