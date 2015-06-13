import React, { PropTypes } from 'react'

let CallersList = React.createClass({

  propTypes: {},

  render() {
    return (
      <ul className="CallersList">
        <li key={1}><figure><img src="http://placehold.it/120x120" width="120" height="120" /></figure></li>
        <li key={2}><figure><img src="http://placehold.it/120x120" width="120" height="120" /></figure></li>
        <li key={3}><figure><img src="http://placehold.it/120x120" width="120" height="120" /></figure></li>
        <li key={4}><figure><img src="http://placehold.it/120x120" width="120" height="120" /></figure></li>
      </ul>
    )
  }

})

export default CallersList
