const Router = require('express').Router()

Router.get('/subtask')
Router.post('/subtask')
Router.put('/subtask/:subtaskId')
Router.delete('/subtask/:subtaskId')

module.exports = Router