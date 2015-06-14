import Flash from './flash'
import React from 'react/addons'
import uid   from 'uid'

let Animation = React.addons.CSSTransitionGroup

export default React.createClass({

  propTypes: {
    onExpire : React.PropTypes.func.isRequired
  },

  shouldComponentUpdate(oldProps) {
    return this.props.message !== oldProps.message
  },

  getDefaultProps() {
    return {
      delay  : 3000,
      status : 'normal'
    }
  },

  expire() {
    this.props.onExpire()
  },

  countdown() {
    this.stop()

    if (this.props.message) {
      this._timer = setTimeout(this.expire, this.props.delay)
    }
  },

  stop() {
    clearTimeout(this._timer)
  },

  componentDidUpdate() {
    this.countdown()
  },

  componentDidMount() {
    this.countdown()
  },

  getMessage(message) {
    return (<Flash key={ uid() }
                   onClick={ this.expire }
                   onEnter={ this.stop }
                   onExit={ this.countdown }
                   status={ message.status }
                   value={ message.value } />)
  },

  render() {
    return (
      <Animation transitionName="flash">
        { this.props.message && this.getMessage(this.props.message) }
      </Animation>
    )
  }
})
