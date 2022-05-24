const Hub = require('./tasks.hub')
const Router = require('express').Router()
const Middlewares = require('../middlewares')

Router.get('/task', Middlewares.auth, Hub.getTask)

Router.get('/tasks', Middlewares.auth, Hub.getTasks)

Router.post('/task', Middlewares.auth, Hub.createTask)

Router.put('/task/:taskId', Middlewares.auth, Hub.updateTask)

Router.delete('/task/:taskId', Middlewares.auth, Hub.deleteTask)

module.exports = Router