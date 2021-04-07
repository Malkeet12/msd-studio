import React, { Component } from "react";
import './index.scss'

class Sketch extends Component {
  constructor() {
    super()
    this.isDrawing = false;
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
    this.direction = true;
    this.lineWidth = 10
  }

  componentDidMount() {
    const canvas = document.querySelector("#draw");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener('mouseup', () => { this.isDrawing = false })
    canvas.addEventListener('mouseout', () => { this.isDrawing = false })
  }
  onMouseDown = (e) => {
    this.isDrawing = true
    this.lastX = e.nativeEvent.offsetX
    this.lastY = e.nativeEvent.offsetY
  }
  draw = (e) => {
    if (!this.isDrawing) return
    const canvas = document.querySelector("#draw");
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#BADA55";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = `hsl(${this.hue},100%,50%)`
    ctx.beginPath();
    ctx.moveTo(this.lastX, this.lastY)
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctx.stroke()
    this.lastX = e.nativeEvent.offsetX
    this.lastY = e.nativeEvent.offsetY
    // if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    //   this.direction = !this.direction
    // }
    // if (this.direction) {
    //   ctx.lineWidth++
    // } else {
    //   ctx.lineWidth -= 1
    // }

    this.hue++
    if (this.hue >= 360) {
      this.hue = 0
    }
  }
  setStrokeWidth = (e) => {
    this.lineWidth = e.target.value
  }
  render() {
    return (
      <div>
        <form class="search-form">
          <input type="number" onChange={this.setStrokeWidth} onKeyUp={this.setStrokeWidth} class="search" placeholder="Change pen width" />
        </form>
        <canvas onMouseDown={this.onMouseDown} onMouseMove={(this.draw)} id="draw" width="100vw" height="100vh"></canvas>
      </div>
    );
  }
}

export default Sketch;
