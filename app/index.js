import Microcosm from 'microcosm'
import Focus     from './stores/focus'
import Message   from './stores/message'

class App extends Microcosm {

  constructor() {
    super()

    // Microcosm keeps all state in a single object.
    // This statement will tell the app to use the
    // Counter store to update state for the 'counter'
    // key of that object.
    //
    // You can fetch this with `app.get('counter')`
    this.addStore('focus', Focus)
    this.addStore('message', Message)
  }
}

export default App
