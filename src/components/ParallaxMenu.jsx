import React, { Component } from "react"

export default class ParallaxMenu extends Component {
  render() {
    return (
      <div
        className="parallaxMenu"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <div className="headingPm">
          <span>{this.props.upperT}</span>
          <br />
          {this.props.lowerT}
        </div>
      </div>
    )
  }
}
