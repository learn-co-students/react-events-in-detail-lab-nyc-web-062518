import React, { Component } from 'react'

class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist();
    setInterval(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed Button</button>
    )
  }

}

export default DelayedButton;
