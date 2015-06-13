import { hostname } from 'os'
import { format, resolve } from 'url'

let assetHost = format({
  hostname : hostname(),
  port     : parseInt(process.env.PORT) + 1,
  protocol : 'http'
})

export default {

  /**
   *  In development we run webpack-dev-server in parallel
   *  to preprocess assets and provide other nice developer
   *  features.
   */
  development: {
    proxy: {
      mapUri(request, callback) {
        callback(null, resolve(assetHost, request.raw.req.url))
      },
      passThrough: true
    }
  },

  /**
   *  In production we just server static assets
   */
  production: {
    directory: {
      path: 'assets'
    }
  }
}
