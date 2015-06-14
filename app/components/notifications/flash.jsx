import Ink   from 'react-ink'
import React from 'react/addons'

export default React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      role   : 'alert',
      status : 'normal',
      type   : 'button'
    }
  },

  render() {
    return React.createElement('button', {
      className    : `flash is-${ this.props.status }`,
      onBlur       : this.props.onExit,
      onClick      : this.props.onClick,
      onFocus      : this.props.onEnter,
      onMouseOver  : this.props.onEnter,
      onMouseOut   : this.props.onExit,
      role         : this.props.role,
      type         : this.props.type
    }, this.props.value, <Ink />)
  }
})
