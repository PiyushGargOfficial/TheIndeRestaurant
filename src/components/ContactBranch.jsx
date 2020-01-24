import React, { Component } from "react"
import "../css/contactbranch.css"

export default class ContactBranch extends Component {
  render() {
    return (
      <div className="contactB">
        <div className="wrapperCb">
          <div className="imageCb" style={this.props.styleI}>
            <img src={this.props.image} alt="" />
          </div>
          <div className="detailsCb" style={this.props.styleD}>
            <div className="branchTCb">branch</div>
            <div className="branchNCb">{this.props.branchName}</div>
            <div className="branchRCb">
              grand restaurant {this.props.branchName}
            </div>
            <div className="branchACb">
              {this.props.upperA}
              <span>{this.props.lowerA}</span>
            </div>
            <div className="branchPCb">{this.props.phoneN}</div>
          </div>
        </div>
      </div>
    )
  }
}
