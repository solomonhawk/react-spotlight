import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let VideoContainer = React.createClass({

  propTypes: {},

  render() {
    return (
      <section className="VideoContainer">
        <div className="text-center absolute-center z-top">
          <h1>You're in the call!</h1>
          <Link to="home">Exit Hangout</Link>
        </div>
      </section>
    )
  }

})

export default VideoContainer
