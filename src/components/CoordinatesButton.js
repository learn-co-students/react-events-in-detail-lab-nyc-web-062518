import React, { Component } from 'react';

class CoordinatesButton extends Component {

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

}

export default CoordinatesButton
