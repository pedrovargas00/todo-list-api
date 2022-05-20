const Router = require('express').Router()

Router.get('/user')
Router.post('/user')
Router.post('/user/login')
Router.put('/user/:userId')
Router.delete('/user/:userId')

module.exports = Router