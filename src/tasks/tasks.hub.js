const Fields = require('./tasks.fields')
const Service = require('../services')

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
}

async function createTask(req, res) {
    try {

        const fields = new Fields(req)

        const data = {
            userId: fields.userId.get(),
            name: fields.name.get(),
            date: new Date(),
            description: fields.description.get(),
            label: fields.label.get()
        }

        res.$data(await Service.Tasks.createTask(data))

    } catch (error) {
        res.$error(error)
    }
}

async function getTasks(req, res) {
    try {

        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find,
            userId:req.query.userId,
            status: req.query.status
        }

        res.$data(await Service.Tasks.getTasks(query))

    } catch (error) {
        res.$error(error)
    }
}

async function getTask(req, res) {
    try {

        const fields = new Fields(req)

        const data = {
            taskId: fields.taskId.get()
        }

        res.$data(await Service.Tasks.getTask(data.taskId))

    } catch (error) {
        res.$error(error)
    }
}

async function updateTask(req, res) {
    try {

        const fields = new Fields(req)
        let data = {
            taskId: fields.taskId.get()
        }

        const fieldsUpdate = [
            'name',
            'description',
            'label',
            'status'
        ]

        fieldsUpdate.forEach(field => {
            if (req.body[field])
                data[field] = req.body[field]
        })
        
        res.$data(await Service.Tasks.updateTask(data.taskId, data))

    } catch (error) {
        res.$error(error)
    }
}

async function deleteTask(req, res) {
    try {
        
        const fields = new Fields(req)

        const data = { 
            taskId: fields.taskId.get()
        }

        res.$data(await Service.Tasks.deleteTask(data.taskId))
        
    } catch (error) {
        res.$error(error)
    }
}