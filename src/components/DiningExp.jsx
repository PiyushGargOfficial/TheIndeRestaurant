import React, { Component } from "react"
import "../css/diningExp.css"
import DinGal from "../assets/images/aboutgal.png"

export default class DiningExp extends Component {
  render() {
    return (
      <div className="dinExp">
        <div className="wrapperDe">
          <div className="imageWde">
            <img src={DinGal} alt="" />
          </div>
          <div className="detailsWde">
            <div className="headDwde">
              <span>dining</span>
              experience
            </div>
            <div className="subtitleDwde">
              ULTIMATE DINING EXPERIENCE LIKE NO OTHER. OUR MODERN FUSION
              CUISINE
            </div>
            <div className="textDwde">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
