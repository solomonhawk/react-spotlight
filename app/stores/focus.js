/**
 * The Focus store keeps track of focus in the application.
 */

import Immutable from 'immutable'
import { setFocus } from '../actions/focus'

let Focus = {

  register() {
    return {
      [setFocus]: this.setFocus
    }
  },

  getInitialState() {
    return Immutable.Map({
      node: {}
    })
  },

  setFocus(state, node) {
    return state.set('node', node)
  }

}

export default Focus
