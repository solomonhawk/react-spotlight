import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let Sidebar = React.createClass({

  propTypes: {},

  render() {
    return (
      <aside className="Sidebar">
        <ul>
          <li key={1}><Link to="home">Chat</Link></li>
          <li key={2}><Link to="home">Screen Share</Link></li>
          <li key={3}><Link to="home">Capture</Link></li>
          <li key={4}><Link to="home">Slack</Link></li>
          <li key={5}><Link to="home">. . .</Link></li>
        </ul>
      </aside>
    )
  }

})

export default Sidebar
