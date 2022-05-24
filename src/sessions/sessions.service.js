const Methods = require('../methods')
const Model = require('./sessions.model')
const Messages = require('./sessions.messages')

module.exports = {
    createSession,
    getSession,
    getSessions,
    deleteSession,
    findSession
}

async function createSession(data) {
    try {
        const session = new Model(data)

        return await session.save()

    } catch (error) {
        throw error
    }
}

async function getSessions(query) {
    try {
        const options = {}
        const limit = 100
        const page = query.page

        if(query.find) {
            const regexp = new RegExp(query.find, 'i')
            options.$or = [
                { browser: regexp }
            ]
        }

        const sessions = await Model.find(options)
            .skip(page * limit)
            .limit(limit)
            .sort({created: -1})

        const total = await Model.countDocuments(options)

        return {
            sessions,
            metadata: Methods.metadata(page, limit, total, sessions.length),
            query
        }

    } catch (error) {
        throw error
    }
}

async function getSession(sessionId) {
    try {

        const session = await Model.findOne({_id: sessionId})

        if(!session)
            throw Messages(sessionId).sessionNotFound

        return session

    } catch (error) {
        throw error
    }
}

async function deleteSession(sessionId) {
    try {
        const session = await new Model.deleteOne({_id: sessionId})

        return session

    } catch (error) {
        throw error
    }
}

async function findSession(token) {
    try {
        
        return await Model.findOne({ token })

    } catch (error) {
        throw error
    }
}