import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let Home = React.createClass({

  propTypes: {
    app   : PropTypes.object.isRequired
  },

  render() {
    return (
      <section>
        <h1>Welcome</h1>
        <p>This is an app focus experiment.</p>
        <Link to="call">Join Hangout</Link>
      </section>
    )
  }

})

export default Home
