import React, { PropTypes } from 'react'

const defaultStyles = {
  top: -50,
  left: -50,
  width: 0,
  height: 0,
  opacity: 0
}

const FocusIndicator = React.createClass({

  getStyles() {
    let { node } = this.props
    if (node === null) return defaultStyles

    let { top, left, width, height } = this.props.node.getBoundingClientRect()
    return { opacity: 1, transform: `translate(${ left }px, ${ top }px)`, width, height }
  },

  render() {

    return (
      <div className="FocusIndicator" style={ this.getStyles() }></div>
    )
  }
})

export default FocusIndicator
