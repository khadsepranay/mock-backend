const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const Router = jsonServer.router('./db.json')
const middleware = jsonServer.defaults()
const port = 8000

server.use(cors())
server.use(Router)
server.use(middleware)
server.listen(port)