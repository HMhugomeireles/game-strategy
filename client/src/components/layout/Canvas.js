import React, { Component } from 'react'
import { CanvasGrid } from '../styles/styles';

export default class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();  
  }

  updateCanvas() {
    const canvasContext = this.refs.canvas.getContext('2d');
    canvasContext.fillStyle = "#f9f9f9";
    let heightRatio = 1.5;
    canvasContext.height = canvasContext.width * heightRatio;
    canvasContext.fillRect(0,0, 1000, 600);
  }

  render() {
    return (
      <CanvasGrid>
        <canvas ref="canvas" />
      </CanvasGrid>
    )
  }
}