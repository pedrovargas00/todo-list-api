const Fields = require("./sessions.fields")
const Service = require('./sessions.service')

module.exports = {
    getSession,
    getSessions,
    deleteSession
}

async function getSession(req, res) {
    try {
        
        const fields = new Fields(req)

        const data = {
            sessionId: fields.sessionId.get()
        }

        res.$data(await Service.getSession(data.sessionId))

    } catch (error) {
        res.$error(error)
    }
}

async function getSessions(req, res) {
    try {
        
        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find
        }

        res.$data(await Service.getSessions(query))

    } catch (error) {
        res.$error(error)
    }
}

async function deleteSession(req, res) {
    try {
        
        const fields = new Fields(req)

        const data = {
            sessionId: fields.sessionId.get()
        }

        res.$data(await Service.deleteSession(data.sessionId))

    } catch (error) {
        res.$error(error)
    }
}