import React, { Component } from "react"
import Image1 from "../assets/images/ourrest.jpg"

class OurStory2 extends Component {
  render() {
    return (
      <div className="ourStorySec2">
        <div className="innerOss">
          <div className="imageSecSs">
            <a href="#0">
              <img src={Image1} alt="" />
            </a>
          </div>
          <div className="detailsSs">
            <div className="innerDetailsSs">
              <div className="headerIdss">branch</div>
              <div className="titleIdss">paragon</div>
              <div className="mainIdss">The inde RESTAURANT PARAGON</div>
              <div className="messageIdss">
                732/21 Second Street, MG
                <br />
                Road, Delhi, India
                <br />
                1.800.456.6743
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OurStory2
