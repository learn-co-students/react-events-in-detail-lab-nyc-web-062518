// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  handleClick = (event) => {
    let coordinateY = event.clientY
    let coordinateX = event.clientX
    let arr = [coordinateX, coordinateY]
    this.props.onReceiveCoordinates(arr)
  }

  render(){
    return (
      <button onClick={e => this.handleClick(e)}>Coordinates</button>
    )
  }
}
