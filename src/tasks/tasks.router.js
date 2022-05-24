const Hub = require('./tasks.hub')
const Router = require('express').Router()

Router.get('/task', Hub.getTask)

Router.get('/tasks', Hub.getTasks)

Router.post('/task', Hub.createTask)

Router.put('/task/:taskId', Hub.updateTask)

Router.delete('/task/:taskId', Hub.deleteTask)

module.exports = Router