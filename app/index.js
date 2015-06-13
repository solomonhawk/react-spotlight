import Microcosm from 'microcosm'
import Counter   from './stores/counter'

class App extends Microcosm {

  constructor() {
    super()

    // Microcosm keeps all state in a single object.
    // This statement will tell the app to use the
    // Counter store to update state for the 'counter'
    // key of that object.
    //
    // You can fetch this with `app.get('counter')`
    this.addStore('counter', Counter)
  }
}

export default App
