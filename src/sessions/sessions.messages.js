module.exports = function($details, $message) {
    return {

        sessionNotFound: {
            code: 503,
            key: 'sessionNotFound',
            message: $message || 'La sesión no ha sido encontrada'
        },

        sessionGetFound: {
            code: 503,
            key: 'sessionGetFound',
            message: $message || 'Error al obtener la sesión'
        },

        sessionSaveFound: {
            code: 503,
            key: 'sessionSaveFound',
            message: $message || 'Error al almacenar la información'
        },

        sessionDeleteFound: {
            code: 503,
            key: 'sessionDeleteFound',
            message: $message || 'Error al eliminar la sesión'
        }
    }
}