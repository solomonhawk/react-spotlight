import React, { PropTypes } from 'react'
import { Link } from 'react-router'

let CallActions = React.createClass({

  propTypes: {},

  render() {
    return (
      <ul className="CallActions">
        <li key={1}><button>Invite</button></li>
        <li key={2}><button>Mute</button></li>
        <li key={3}><button>Hide Camera</button></li>
        <li key={4}><button>Bandwidth</button></li>
        <li key={5}><button>Settings</button></li>
        <li key={6}><Link to="home">Leave Call</Link></li>
      </ul>
    )
  }

})

export default CallActions
