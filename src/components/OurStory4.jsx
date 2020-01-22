import React, { Component } from "react"
import "../css/ourstory4.css"

export default class OurStory extends Component {
  render() {
    return (
      <div className="ourStoryG">
        <div className="innerOss">
          <div
            className="imageSecSs"
            href="#0"
            style={{ backgroundImage: `url(${this.props.imageA})` }}
          ></div>
          <div
            className="detailsSs"
            style={{ backgroundColor: `${this.props.colorA}` }}
          >
            <div className="innerDetailsSs">
              <div className="headerIdss">{this.props.upperA}</div>
              <div className="titleIdss">{this.props.lowerA}</div>
              <div className="mainIdss">{this.props.textM}</div>
              <div className="messageIdss">{this.props.textA}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
