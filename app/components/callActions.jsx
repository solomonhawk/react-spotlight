import React, { PropTypes } from 'react'

let CallActions = React.createClass({

  propTypes: {},

  render() {
    return (
      <ul className="CallActions">
        <li key={1}><button><i className="icon-users"></i></button></li>
        <li key={2}><button><i className="icon-microphone-off"></i></button></li>
        <li key={3}><button><i className="icon-camera"></i></button></li>
        <li key={4}><button><i className="icon-connection-75"></i></button></li>
        <li key={5}><button><i className="icon-settings"></i></button></li>
        <li key={6}><button><i className="icon-switch"></i></button></li>
      </ul>
    )
  }

})

export default CallActions
