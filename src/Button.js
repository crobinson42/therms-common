import React, { Component } from 'react'

class Button extends Component {
  constructor ({ confirmText, onConfirm }) {
    super()
    this.state = {
      confirming: false
    }
  }

  handleClick (e) {
    if (this.props.onConfirm) {
      if (this.state.confirming) {
        this.setState({
          confirming: false
        }, this.props.onConfirm)
      } else {
        this.setState({
          confirming: true
        })
      }
    } else {
      this.props.onClick()
    }
  }

  render () {
    return (
      <button
        className={this.props.className}
        style={this.props.style}
        onClick={this.handleClick.bind(this)}
        >
        {this.state.confirming ? this.props.confirmText || 'Are you sure?' : this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func,
  onConfirm: React.PropTypes.func,
  confirmText: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object
}

Button.defaultProps = {
  className: '',
  style: {}
}

export default Button
