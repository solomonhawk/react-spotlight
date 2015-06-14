import React, { PropTypes } from 'react'
import cx from 'classnames'
import util from '../../lib/util'
import constants from '../constants'
import traverse from '../../lib/traverse'
import FocusIndicator from './focusIndicator'
import { focusIntent, setFocusData } from '../actions/focus'
import { setMessage } from '../actions/message'
import findNearest from '../../lib/findNearest'

const FocusManager = React.createClass({

  propTypes: {
    app: PropTypes.object.isRequired
  },

  componentDidMount() {
    let rootNode       = this.refs.focus.getDOMNode()
    let dimensions     = rootNode.getBoundingClientRect()
    let nodes          = this.getFocusableNodes(rootNode)

    this.props.app.push(setFocusData, { dimensions, nodes })
  },

  getFocusableNodes(node) {
    return traverse(node, util.isFocusableNode)
           .map((node) => ({ node, rect: node.getBoundingClientRect() }))
  },

  setFocus(e) {
    console.log(e)
    this.props.app.push(setFocusData, { current: e.target })
  },

  setNoFocus(e) {
    this.props.app.push(setFocusData, { current: null })
  },

  handleKeyFocus(e) {
    if (!e.isDefaultPrevented()) {
      let key = util.objectHasValue(constants.keys, e.key)
      let nodes = this.props.app.get('focus').get('nodes')

      key && this.props.app.push(focusIntent, {
        nodes,
        target: e.target,
        direction: key
      })

      if (e.key !== 'Shift' && e.key !== 'Ctrl' && e.key !== 'Alt') {
        let keys = []

        if (e.ctrlKey) keys.push('Ctrl')
        if (e.shiftKey) keys.push('Shift')
        if (e.altKey) keys.push('Alt')

        keys.push(e.key)

        this.props.app.push(setMessage, {
          value: `KEY PRESSED: "${ keys.join(' + ') }"`
        })
      }
    }
  },

  render() {
    let { component: Component, className, ...props } = this.props
    let classes = cx(className, 'focus-manager')

    return (
      <Component ref="focus" onKeyUp={ this.handleKeyFocus } onBlur={ this.setNoFocus } onFocus={ this.setFocus } className={ classes } { ...props }>
        <FocusIndicator node={ this.props.app.get('focus').get('current') } />
        { this.props.children }
      </Component>
    )
  }
})

export default FocusManager
