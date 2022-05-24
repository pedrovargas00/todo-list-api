const Model = require('./subtasks.model')
const Methods = require('../methods')
const Messages = require('./subtasks.messages')

module.exports = {
    createSubtask,
    updateSubtask,
    deleteSubtask,
    getSubtasks,
    getSubtask
}

async function createSubtask(data) {
    try {

        const subtask = new Model(data)

        return subtask.save()

    } catch (error) {
        throw error
    }
}

async function getSubtasks(query) {
    try {

        const options = {}
        const page = query.page
        const limit = 3

        if(query.find) {
            const regexp = new RegExp(query.find, 'i')
            options.$or = [
                { name: regexp },
                { description: regexp },
                { label: regexp },
            ]
        }

       if (query.taskId)
            options.taskId = query.taskId
            
        if (query.status)
            options.status = query.status

        const subtasks = await Model.find(options)
            .skip(limit * page)
            .limit(limit)
            .sort({created: -1})

        const total = await Model.countDocuments(options)

        return {
            subtasks,
            metadata: Methods.metadata(page, limit, total, subtasks.length),
            query
        }

    } catch (error) {
        throw error
    }
}

async function getSubtask(subtaskId) {
    try {

        const subtask = await Model.findOne({_id: subtaskId})

        if (!subtask)
            throw Messages(subtaskId).subtaskNotFound
        return subtask

    } catch (error) {
        throw error
    }
}

async function updateSubtask(subtaskId, data) {
    try {

        const subtask = await getSubtask(subtaskId)
        const fields = Object.keys(data)

        fields.forEach(field => subtask[field] = data[field])
        return subtask.save()

    } catch (error) {
        throw error
    }
}

async function deleteSubtask(subtaskId) {
    try {

        const task = await Model.deleteOne({_id: subtaskId})

        return task

    } catch (error) {
        throw error
    }
}