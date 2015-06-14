import React  from 'react'
import Router from 'react-router'
import FocusManager from './focusManager'
import Notifications from './notifications'
import { unSetMessage } from '../actions/message'

let Layout = React.createClass({

  propTypes: {
    app: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return this.props.app.valueOf()
  },

  updateState() {
    this.setState(this.props.app.valueOf())
  },

  componentDidMount() {
    this.props.app.listen(this.updateState)
  },

  componentWillUnmount() {
    this.props.app.ignore(this.updateState)
  },

  render() {
    let { message } = this.state

    return (
      <FocusManager { ...this.props } component="main" className="flex fill-space" role="main">
        <Notifications message={ message } onExpire={ unSetMessage } />
        <Router.RouteHandler { ...this.props } { ...this.state } />
      </FocusManager>
    )
  }

})

export default Layout
