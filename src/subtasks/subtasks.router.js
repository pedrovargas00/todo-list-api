const Hub = require('./subtasks.hub')
const Router = require('express').Router()
const Middlewares = require('../middlewares')

Router.get('/subtask', Middlewares.auth, Hub.getSubtask)

Router.get('/subtasks', Middlewares.auth, Hub.getSubtasks)

Router.post('/subtask', Middlewares.auth, Hub.createSubtask)

Router.put('/subtask/:subtaskId', Middlewares.auth, Hub.updateSubtask)

Router.delete('/subtask/:subtaskId',Middlewares.auth, Hub.deleteSubtask)

module.exports = Router