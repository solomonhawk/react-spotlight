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
      <section className="fill-space">
        <section className="flex absolute fill-space z">
          <Sidebar />
          <div className="flex flex-justify-between flex-column flex-grow">
            <CallActions />
            <CallersList />
          </div>
        </section>

        <VideoContainer />
      </section>
    )
  }

})

export default Call
