module.exports = function($details, $message) {

   return {
      subtaskGetError: {
         code: 503,
         key: 'taskGetError',
         message: $message || 'Error al obtener la información de una subtarea',
         $details
      },

      subtaskSaveError: {
         code: 503,
         key: 'taskSaveError',
         message: $message || 'Error al almacenar la información de una subtarea',
         $details
      },

      subtaskUpdateError: {
         code: 503,
         key: 'taskUpdateError',
         message: $message || 'Error al actualizar la información de una subtarea',
         $details
      },

      subtaskDeleteError: {
         code: 503,
         key: 'taskDeleteError',
         message: $message || 'Error al eliminar una subtarea',
         $details
      },

      subtaskNotFound: {
         code: 404,
         key: 'subtaskNotFound',
         message: $message || 'El registro de la subtarea no fue encontrada'
      }
   }
}