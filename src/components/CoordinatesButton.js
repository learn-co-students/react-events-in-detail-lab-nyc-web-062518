import React, { Component } from 'react'

class CoordinatesButton extends Component {

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    // debugger
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton;
