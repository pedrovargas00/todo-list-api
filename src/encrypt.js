const Bcrypt = require('bcrypt')
const Cryptr = require('cryptr')
const Config = require('./config')

module.exports = {
    bcryptHash,
    bcryptCompare,
    cryptrString,
    decryptString,
}

function bcryptHash(value) {
    return Bcrypt.hashSync(value, 10)
}

function bcryptCompare(value, hash) {
    return Bcrypt.compareSync(value, hash)
}

function cryptrString(value) {
    const cryptr = new Cryptr(Config.SALT)
    
    return cryptr.encrypt(value)
}

function decryptString(value) {
    const cryptr = new Cryptr(Config.SALT)
    
    return cryptr.decrypt(value)
}