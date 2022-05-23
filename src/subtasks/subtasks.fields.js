const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.subtaskId = validator({
        type: 'objectId',
        name: 'ID subtarea',
        value: props.subtaskId
    })
    
    this.taskId = validator({
        type: 'objectId',
        name: 'ID tarea',
        value: props.taskId
    })
    
    this.name = validator({
        type: 'string',
        name: 'nombre curso',
        value: props.name
    })
    
    this.description = validator({
        type: 'string',
        name: 'descripción',
        value: props.description
    })
    
    this.status = validator({
        type: 'string',
        name: 'estado',
        value: props.status
    })

    return this
}