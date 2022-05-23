const Model = require('./users.model')
const Methods = require('../methods')
const Messages = require('./users.messages')

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}

// async function loginUser(data) {

//     try {
//         const user = await Model.findOne({email: data.email}, '+password')

//         if (!teacher)
//             throw Messages(data.email).userNotFound
//         if (!Encrypt.bcryptCompare(data.password, user.password))
//             throw Messages(data.password).userPasswordError
        
        

//     } catch (error) {
//         throw error
//     }
// }

async function createUser(data) {
    try {

        const user = new Model(data)

        return user.save()

    } catch (error) {
        throw error
    }
}

async function getUsers(query) {
    try {
        
        const options = {}
        const page = query.page
        const limit = 3

        if(query.find) {
            const regexp = new RegExp(query.find, 'i')
            options.$or = [
                { name: regexp },
                { phone: regexp },
                { email: regexp },
            ]
        }

        if(query.status)
            options.status = query.status

        const users = await Model.find(options)
            .skip(limit * page)
            .limit(limit)
            .sort({created: -1})

        const total = await Model.countDocuments(options)

        return {
            users,
            metadata: Methods.metadata(page, limit, total, users.length),
            query
        }
        
    } catch (error) {
        throw error
    }
}

async function getUser(userId) {    
    try {
        const user = await Model.findOne({_id: userId})

        if (!user)
            throw Messages(userId).userNotFound

        return user        

    } catch (error) {
        throw error
    }
}

async function updateUser(userId, data) {
    try {
        
        const user = await getUser(userId)
        const fields = Object.keys(data)

        fields.forEach(field => user[field] = data[field])

        return user.save()
        
    } catch (error) {
        throw error
    }
}

async function deleteUser(userId) {
    try {
        
        const user = await getUser(userId)
        await Model.deleteOne({_id: userId})

        return user
        
    } catch (error) {
        throw error
    }
}