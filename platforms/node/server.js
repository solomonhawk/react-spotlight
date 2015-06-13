import Hapi    from 'hapi'
import project from '../../package'

let server = new Hapi.Server({
  app   : require('./config/app'),
  debug : { log: ['*'], request: ['*'] }
})

server.connection({
  port : process.env.PORT
})

server.register([
  require('./plugins/logger'),
  require('./plugins/assets'),
  require('./plugins/views')
], function() {
  server.start(function() {
    console.log("started in %s: %s", process.env.NODE_ENV, server.info.uri)
  })
})
