import React, { PropTypes } from 'react'

let CallersList = React.createClass({

  propTypes: {},

  render() {
    return (
      <ul className="CallersList">
        <li key={1}><figure><img src="http://placehold.it/200x200" width="200" height="200" /></figure></li>
        <li key={2}><figure><img src="http://placehold.it/200x200" width="200" height="200" /></figure></li>
        <li key={3}><figure><img src="http://placehold.it/200x200" width="200" height="200" /></figure></li>
        <li key={4}><figure><img src="http://placehold.it/200x200" width="200" height="200" /></figure></li>
      </ul>
    )
  }

})

export default CallersList
