/**
 * This is a prelude script to setup the server
 * environment.
 */

/**
 * Load in environment variables
 * http://12factor.net/config
 */
require('node-env-file')('.env')

/**
 * Enable ES6, the language of our app.
 * For configuration info, see .babelrc and
 * http://babeljs.io
 */
require('babel/register')

/**
 * Finally, boot application.
 * http://hapijs.org
 */
require('./server')
