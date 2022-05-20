const Router = require('express').Router()

Router.get('/', async(req, res) => {
   res.send({
      success: true,
      data: {
         message: 'TODO List'
      }
   })
})

module.exports = [
   Router,
   require('./users/users.router'),
   require('./tasks/task.router'),
   require('./subtasks/subtask.router')
]