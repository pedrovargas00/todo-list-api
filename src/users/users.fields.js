const validator = require('../validator')

module.exports = function(req) {

    const props = {...req.headers, ...req.params, ...req.query, ...req.body}

    this.userId = validator({
        type: 'objectId',
        name: 'identificador',
        value: props.userId
    })
    
    this.firstName = validator({
        type: 'string',
        name: 'nombre',
        value: props.firstName
    })
    
    this.lastName = validator({
        type: 'string',
        name: 'apellido',
        value: props.lastName
    })
    
    this.name = validator({
        type: 'string',
        name: 'usuario',
        value: props.username
    })
    
    this.email = validator({
        type: 'string',
        name: 'correo',
        value: props.email
    })
    
    this.phone = validator({
        type: 'string',
        name: 'teléfono',
        value: props.phone,
        size: 10
    })
    
    this.password = validator({
        type: 'string',
        name: 'contraseña',
        value: props.password
    })

    return this
}