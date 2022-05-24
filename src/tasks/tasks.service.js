const Model = require('./tasks.model')
const Methods = require('../methods')
const Messages = require('./tasks.messages')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
    createTask,
    updateTask,
    deleteTask,
    getTasks,
    getTask
}

async function createTask(data) {
    try {

        const task = new Model(data)

        return task.save()

    } catch (error) {
        throw error
    }
}

async function getTasks(query) {    
    try {

        const options = {}
        const page = query.page
        const limit = 3

        if (query.find) {
            const regexp = new RegExp(query.find, 'i')
            options.$or = [
                { name: regexp },
                { description: regexp },
                { label: regexp }
            ]
        }

        if (query.userId)
            options.userId = query.userId
        
        if (query.status)
            options.status = query.status

        const tasks = await Model.find(options)
            .skip(limit * page)
            .limit(limit)
            .sort({created: -1})

        const total = await Model.countDocuments(options)

        return {
            tasks,
            metadata: Methods.metadata(page, limit, total, tasks.length),
            query
        }

    } catch (error) {
        throw error
    }
}

async function getTask(taskId) {    
    try {

        const task = await Model.findOne({_id: taskId})

        if (!task)
            throw Messages(taskId).taskNotFound

        return task

    } catch (error) {
        throw error
    }
}

async function updateTask(taskId, data) {    
    try {

        const task = await getTask(taskId)
        const fields = Object.keys(data)

        fields.forEach(field => task[field] = data[field])
        
        return await task.save()

    } catch (error) {
        throw error
    }
}

async function deleteTask(taskId) {    
    try {

        const task = await Model.deleteOne({_id: taskId})

        return task

    } catch (error) {
        throw error
    }
}