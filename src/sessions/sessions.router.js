const Hub = require('./sessions.hub')
const Router = require('express').Router()

Router.get('/sessions', Hub.getSessions)

Router.get('/session/:sessionId', Hub.getSession)

Router.delete('/session/:sessionId', Hub.deleteSession)

module.exports = Router