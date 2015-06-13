import React, { PropTypes } from 'react'
import { setFocus } from '../actions/focus'
import { Link } from 'react-router'
import Sidebar from './sidebar'
import CallActions from './callActions'
import VideoContainer from './videoContainer'
import CallersList from './callersList'

let Call = React.createClass({

  propTypes: {
    app   : PropTypes.object.isRequired,
    focus : PropTypes.object.isRequired
  },

  increase(e) {
    this.props.app.push(setFocus, e.target)
  },

  render() {
    let { app, focus } = this.props

    return (
      <section>
        <Sidebar />
        <CallActions />
        <VideoContainer />
        <CallersList />
        <h1>You're in the call!</h1>
        <Link to="home">Exit Hangout</Link>
      </section>
    )
  }

})

export default Call
