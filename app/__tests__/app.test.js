import App from '../../app'
import { setFocus } from '../actions/focus'

describe('App', function() {
  let app = null

  beforeEach(function(done) {
    app = new App()
    app.start(done)
  })

  describe('when the setFocus action is fired with null', function() {
    beforeEach(function() {
      app.push(setFocus, null)
    })

    it ('should set focus to null', function() {
      app.get('focus').get('node').should.equal(null)
    })
  })

})
