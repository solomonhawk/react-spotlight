import Counter from '../counter'

describe('Store - Counter', function() {

  it ('can increase a count', function() {
    let state = Counter.getInitialState()
    let next  = Counter.increaseCount(state)

    next.get('count').should.equal(state.get('count') + 1)
  })

})
