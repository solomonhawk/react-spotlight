import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let Sidebar = React.createClass({

  propTypes: {},

  render() {
    return (
      <aside className="Sidebar">
        <ul>
          <li key={1}><Link to="home"><i className="icon-chat-2"></i></Link></li>
          <li key={2}><Link to="home"><i className="icon-screen"></i></Link></li>
          <li key={3}><Link to="home"><i className="icon-camera"></i></Link></li>
          <li key={4}><Link to="home"><i className="icon-cloud"></i></Link></li>
          <li key={5}><Link to="home"><i className="icon-lab"></i></Link></li>
        </ul>
      </aside>
    )
  }

})

export default Sidebar
