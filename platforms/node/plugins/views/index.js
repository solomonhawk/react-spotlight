/**
 * Client
 * Supports rendering and authentication for the client-side
 * application (see ./app)
 */

import Swig   from 'swig'
import routes from './routes'
import path   from 'path'

let plugin = function(server, options, next) {
  server.views({
    engines: {
      html: Swig
    },
    path     : path.join(__dirname, 'templates'),
    isCached : server.settings.app.isProduction,
    context  : server.settings.app
  })

  server.route(routes)

  next()
}

plugin.attributes = {
  name : 'Views'
}

export default plugin
