const Router = require('express').Router()

Router.get('/task')
Router.post('/task')
Router.put('/task/:taskId')
Router.delete('/task/:taskId')

module.exports = Router