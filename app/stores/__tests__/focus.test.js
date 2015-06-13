import Focus from '../focus'

describe('Store - Focus', function() {

  it ('can set the focused node', function() {
    let NODE = {}
    let state = Focus.getInitialState()
    let next  = Focus.setFocus(NODE)

    next.get('node').should.equal(NODE)
  })

})
