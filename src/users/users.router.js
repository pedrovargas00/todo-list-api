const Router = require('express').Router()
const Hub = require('./users.hub')

Router.get('/user', Hub.getUser)
Router.get('/users', Hub.getUsers)
Router.post('/user', Hub.createUser)
// Router.post('/user/login')
Router.put('/user/:userId', Hub.updateUser)
Router.delete('/user/:userId', Hub.deleteUser)

module.exports = Router