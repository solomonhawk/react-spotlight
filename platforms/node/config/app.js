import project from '../../../package'

let config = {}

config.project       = project
config.env           = process.env.NODE_ENV || 'development'
config.isProduction  = config.env === 'production'
config.isDevelopment = !config.isProduction

export default config
