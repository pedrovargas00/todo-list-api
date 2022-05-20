const Fields = require("./users.fields")

module.exports = {}

async function loginUser(req, res) {

   try {
      const fields = new Fields()
      const data = {
         email: fields.email.get(),
         password: fields.password.get()
      }

      // res.$data(await ServiceWorker.loginUser(data))
   } catch (error) {
      res.$error(error)
   }
}

async function createUser(req, res) {

}

async function getUsers(req, res) {

}

async function getUser(req, res) {

}

async function updateUser(req, res) {

}

async function deleteUser(req, res) {

}