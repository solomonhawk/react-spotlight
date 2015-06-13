import Good from 'good'
import Console from 'good-console'

export default {
  register : Good,
  options  : {
    opsInterval : 1000,
    reporters   : [{
      reporter  : Console,
      events    : { log: '*', error: '*', response: '*' }
    }]
  }
}
