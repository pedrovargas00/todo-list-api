const Fields = require('./subtasks.fields')
const Service = require('../services')

module.exports = {
    createSubtask,
    getSubtasks,
    getSubtask,
    updateSubtask,
    deleteSubtask
}

async function createSubtask(req, res) {
    try {

        const fields = new Fields(req)

        const data = {
            taskId: fields.taskId.get(),
            name: fields.name.get(),
            description: fields.description.get()
        }

        res.$data(await Service.Subtasks.createSubtask(data))

    } catch (error) {
        res.$error(error)
    }
}

async function getSubtasks(req, res) {
    try {

        const query = {
            page: parseInt(req.query.page || 0),
            find: req.query.find,
            taskId:req.query.taskId,
            status: req.query.status
        }

        res.$data(await Service.Subtasks.getSubtasks(query))

    } catch (error) {
        res.$error(error)
    }
}

async function getSubtask(req, res) {
    try {

        const fields = new Fields(req)

        const data = {
            subtaskId: fields.subtaskId.get()
        }

        res.$data(await Service.Subtasks.getSubtask(data.subtaskId))

    } catch (error) {
        res.$error(error)
    }
}

async function updateSubtask(req, res) {
    try {
        const fields = new Fields(req)

        let data = {
            subtaskId: fields.subtaskId.get()
        }
        const fieldsUpdate = [
            'name',
            'description',
            'label',
            'status'
        ]

        fieldsUpdate.forEach((field) => {
            if (req.body[field])
                data[field] = req.body[field]
        })
        
        res.$data(await Service.Subtasks.updateSubtask(data.subtaskId, data))

    } catch (error) {
        res.$error(error)
    }
}

async function deleteSubtask(req, res) {
    try {

        const fields = new Fields(req)

        const data = {
            subtaskId: fields.subtaskId.get()
        }

        res.$data(await Service.Subtasks.deleteSubtask(data.subtaskId))

    } catch (error) {
        res.$error(error)
    }
}