/**
 * The Focus store keeps track of focus in the application.
 */

import Immutable from 'immutable'
import { setFocusData, focusIntent } from '../actions/focus'

let Focus = {

  register() {
    return {
      [setFocusData] : this.setFocusData,
      [focusIntent]  : this.focusIntent
    }
  },

  getInitialState() {
    return Immutable.fromJS({
      current    : null,
      dimensions : {},
      nodes      : {}
    })
  },

  setFocusData(state, data) {
    return state.merge(data)
  }
}

export default Focus


