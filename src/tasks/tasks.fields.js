const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.userId = validator({
        type: 'objectId',
        name: 'ID usuario',
        value: props.userId
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
    
    this.date = validator({
        type: 'string',
        name: 'fecha',
        value: props.date
    })
    
    this.description = validator({
        type: 'string',
        name: 'descripción',
        value: props.description
    })
    
    this.label = validator({
        type: 'string',
        name: 'etiqueta',
        value: props.label
    })
    
    this.status = validator({
        type: 'string',
        name: 'estado',
        value: props.status
    })

    return this
}