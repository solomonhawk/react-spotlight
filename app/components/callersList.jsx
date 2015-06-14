import React, { PropTypes } from 'react'

let CallersList = React.createClass({

  propTypes: {},

  render() {
    return (
      <ul className="CallersList">
        <li key={1}><figure><a href="#"><img src="http://placekitten.com/g/120/120" width="120" height="120" /></a></figure></li>
        <li key={2}><figure><a href="#"><img src="http://placekitten.com/g/120/120" width="120" height="120" /></a></figure></li>
        <li key={3}><figure><a href="#"><img src="http://placekitten.com/g/120/120" width="120" height="120" /></a></figure></li>
        <li key={4}><figure><a href="#"><img src="http://placekitten.com/g/120/120" width="120" height="120" /></a></figure></li>
      </ul>
    )
  }

})

export default CallersList
