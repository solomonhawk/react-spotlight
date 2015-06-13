import React, { PropTypes } from 'react'
import { increaseCount } from '../actions/counter'

let Home = React.createClass({

  propTypes: {
    app     : PropTypes.object.isRequired,
    counter : PropTypes.object.isRequired
  },

  increase() {
    this.props.app.push(increaseCount)
  },

  render() {
    let { app, counter } = this.props

    return (
      <section>
        <h1>Welcome</h1>
        <p>This is a basic Flux app</p>
        <p>Clicks: { counter.get('count') }</p>
        <button ref="button" onClick={ this.increase }>Click me!</button>
      </section>
    )
  }

})

export default Home
