/**
 * In this project, Stores simply take an existing state and some
 * parameters, then reduce that into a new state.
 */

import Immutable from 'immutable'
import { increaseCount } from '../actions/counter'

let Counter = {

  register() {
    return {
      [increaseCount]: this.increaseCount
    }
  },

  getInitialState() {
    return Immutable.Map({ count : 0 })
  },

  increaseCount(state, amount=1) {
    return state.set('count', state.get('count') + amount)
  }

}

export default Counter
