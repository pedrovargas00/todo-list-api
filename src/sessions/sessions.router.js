const Router = require('express').Router()

Router.get('/sessions')
Router.get('/session/:sessionId')
Router.delete('/session/:sessionId')

module.exports = Router