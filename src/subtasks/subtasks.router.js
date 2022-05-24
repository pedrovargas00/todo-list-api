const Hub = require('./subtasks.hub')
const Router = require('express').Router()

Router.get('/subtask', Hub.getSubtask)

Router.get('/subtasks', Hub.getSubtasks)

Router.post('/subtask', Hub.createSubtask)

Router.put('/subtask/:subtaskId', Hub.updateSubtask)

Router.delete('/subtask/:subtaskId', Hub.deleteSubtask)

module.exports = Router