import React, { Component } from "react"
import AboutImg from "../assets/images/about.jpg"

export default class OurStory extends Component {
  render() {
    return (
      <div className="ourStorySec">
        <div className="innerOss">
          <div className="imageSecSs">
            <a href="#0">
              <img src={AboutImg} alt="" />
            </a>
          </div>
          <div className="detailsSs">
            <div className="innerDetailsSs">
              <div className="headerIdss">Our</div>
              <div className="titleIdss">philosophy</div>
              <div className="mainIdss">
                ultimate dining experience like no other
              </div>
              <div className="messageIdss">
                We wanted to serve a pallete which understands the quality of
                food but still at a reasonable price. This was not about
                bringing the finest ingredients together to create a master
                piece but to use the indegineous ingredients and use them to
                create a bomb that explodes of flavour.
              </div>
              <div className="signatureIdss">john phillipe</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
