import React, { Component } from "react"
import DotW from "../assets/svg/dotwhite.svg"

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="overlay"></div>
        <div className="textHome">
          <div className="secondaryText">welcome to the</div>
          <div className="nameHome">
            inde <span>restaurant</span>
          </div>
          <div className="statementHome">
            making delicious food for you since 1998
          </div>
        </div>
        <div className="scrollBtnHome">
          <div className="dotScroll">
            <img src={DotW} alt="" />
          </div>
          <div className="scrollText">scroll</div>
        </div>
      </div>
    )
  }
}
