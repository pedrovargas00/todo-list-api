module.exports = function($details, $message) {

   return {
      taskGetError: {
         code: 503,
         key: 'taskGetError',
         message: $message || 'Error al obtener la información de una tarea',
         $details
      },
      taskSaveError: {
         code: 503,
         key: 'taskSaveError',
         message: $message || 'Error al almacenar la información de una tarea',
         $details
      },
      taskUpdateError: {
         code: 503,
         key: 'taskUpdateError',
         message: $message || 'Error al actualizar la información de una tarea',
         $details
      },
      taskDeleteError: {
         code: 503,
         key: 'taskDeleteError',
         message: $message || 'Error al eliminar una tarea',
         $details
      }
   }
}