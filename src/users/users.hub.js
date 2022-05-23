const Fields = require("./users.fields")
const Service = require('./users.service')

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}

// async function loginUser(req, res) {
//     try {
//        const fields = new Fields(req)
//        const data = {
//            email: fields.email.get(),
//            password: fields.password.get()
//        }

//       // res.$data(await ServiceWorker.loginUser(data))

//     } catch (error) {
//         res.$error(error)
//     }
// }

async function createUser(req, res) {
    try {

        const fields = new Fields(req)

        const data = {
            firstName: fields.firstName.get(),
            lastName: fields.lastName.get(),
            email: fields.email.get(),
            phone: fields.phone.get(),
            password: fields.password.get()
        }

        res.$data(await Service.createUser(data))

    } catch (error) {
        res.$error(error)
    }
}

async function getUsers(req, res) {
    try {

        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find
        }

        res.$data(await Service.getUsers(query))

    } catch (error) {
        res.$error(error)
    }
}

async function getUser(req, res) {
    try {

        const field = new Fields(req)

        const data = {
            userId: field.userId.get()
        }

        res.$data(await Service.getUser(data.userId))

    } catch (error) {
        res.$error(error)
    }
}

async function updateUser(req, res) {
    try {

        const fields = new Fields(req)
        let data = {
            userId: fields.userId.get()
        }

        const fieldsUpdate = [
            'firstName',
            'lastName',
            'email',
            'phone',
            'password'
        ]

        fieldsUpdate.forEach(field => {
            if (req.body[field])
                data[field] = req.body[field]
        })
        
        res.$data(await Service.updateUser(data.userId, data))

    } catch (error) {
        res.$error(error)
    }
}

async function deleteUser(req, res) {
    try {

        const fields = new Fields(req)
        const data = { 
            userId: fields.userId.get()
        }

        res.$data(await Service.deleteUser(data.userId))

    } catch (error) {
        res.$error(error)
    }
}