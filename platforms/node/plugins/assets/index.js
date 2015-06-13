/**
 * Assets
 * Static asset management
 */

import handler from './handler'

let plugin = function(server, options, next) {
  let { env, isProduction } = server.settings.app

  let cache = {
    expiresIn: isProduction? 86400000 : 0
  }

  server.route([
    {
      method: 'GET',
      path: '/favicon.ico',
      config: {
        handler: {
          file: 'assets/favicon.ico'
        },
        cache: cache
      }
    },
    {
      method: 'GET',
      path: '/assets/{param*}',
      config: {
        handler : handler[env],
        cache   : cache
      }
    }
  ])

  next()
}

plugin.attributes = {
  name : 'Static Assets'
}

export default plugin
