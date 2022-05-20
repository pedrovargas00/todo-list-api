const Cors = require('cors')
const Morgan = require('morgan')
const Express = require('express')

const Database = require('./src/db')
const Config = require('./src/config')
const Router = require('./src/router')

const App = Express()

App.use(Cors())
App.use(Morgan('dev'))
App.use(Express.json())
App.use(Express.static('public'))
App.use((req, res, next) => {
   res.$data = data => Responses.$data(data, res)
   res.$html = html => Responses.$html(html, res)
   res.$file = file => Responses.$file(file, res)
   res.$error = error => Responses.$error(error, res)
   res.$redirect = redirect => Responses.$redirect(redirect, res)
   next()
})
App.use(Router)

Database()
   .then(() => {
      App.listen(Config.PORT, () => {
         console.log(`[APP] ${Config.HOST}: ${Config.PORT}`)
      })
   })
   .catch(error => {
      console.log(error)
      process.exit(0)
   })