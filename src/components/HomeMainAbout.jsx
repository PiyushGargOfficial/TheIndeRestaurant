import React, { Component } from "react"
import "../css/homemainabout.css"

export default class HomeMainAbout extends Component {
  render() {
    return (
      <div className="homeMa">
        <div className="overlay"></div>
        <div className="textHome">
          <div className="secondaryText">{this.props.upperText}</div>
          <div className="nameHome">{this.props.lowerText}</div>
        </div>
      </div>
    )
  }
}
