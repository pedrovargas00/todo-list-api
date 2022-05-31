const Messages = require('./messages')
const Services = require('./services')

module.exports = {
    auth,
    notFound,
    serverError
}

async function auth(req, res, next) {
    try {
        
        const token = req.headers.token

        if (!token)
            return res.$error(Messages().tokenRequiredError)

        const session = await Services.Sessions.findSession(token)
        
        if (!session)
            return res.$error(Messages().tokenNotFound)
        
        if (new Date > session.expired)
            return res.$error( Messages().tokenExpiredError )

        req.userId = session.userId 

        next()

    } catch (error) {
        res.$error(Messages().serverError)
    }
}

async function notFound(req, res) {
    res.$error(Messages().serverNotFound)
}

async function serverError(error, req, res, next) {
    res.$error(Messages().serverError)
}