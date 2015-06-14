/**
 * The Focus store keeps track of focus in the application.
 */
import Message from '../models/message'
import { setMessage, unSetMessage, errorMessage } from '../actions/message'

let MessageStore = {

  register() {
    return {
      [setMessage]   : this.setMessage,
      [unSetMessage] : this.unSetMessage,
      [errorMessage] : this.errorMessage
    }
  },

  getInitialState() {
    return null
  },

  prepare(value) {
    return state => this.set(state, { value })
  },

  setMessage(state, props) {
    return new Message(props)
  },

  unSetMessage(state, data) {
    return null
  },

  errorMessage(state, value) {
    return new Message({ status: 'error', value })
  }
}

export default MessageStore


