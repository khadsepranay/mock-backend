const jsonServer = require('json-server')

server.use(cors())
server.use(Router)
server.use(middleware)
server.listen(port)