import React, { Component } from "react"
import UpArrow from "../assets/svg/upward.svg"
import FacebookW from "../assets/svg/facebookwhite.svg"
import YoutubeW from "../assets/svg/youtubewhite.svg"
import PinterestW from "../assets/svg/pinterestwhite.svg"
import TwitterW from "../assets/svg/twitterwhite.svg"
import InstaW from "../assets/svg/instagramwhite.svg"
import PhoneG from "../assets/svg/telephonegrey.svg"
import MailG from "../assets/svg/mailgrey.svg"
import GlobeG from "../assets/svg/worldgrey.svg"
import LocationG from "../assets/svg/pinGrey.svg"

export default class Footer extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <div className="footer">
        <div className="footerWrapper">
          <div className="footerDetails">
            <div className="footerGridCont">
              <div className="itemFgc">
                <div className="resNameIfg">
                  the inde <br />
                  <span>Restaurant</span>
                </div>
                <div className="detailsIfg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  quia soluta asperiores.
                </div>
                <div className="socialBarIfg">
                  <img src={FacebookW} alt="" />
                  <img src={PinterestW} alt="" />
                  <img src={YoutubeW} alt="" />
                  <img src={TwitterW} alt="" />
                  <img src={InstaW} alt="" />
                </div>
              </div>
              <div className="itemFgc">
                <ul>
                  <li className="mainHead">recent posts</li>
                  <li className="secHead">black spaghetti with rock shrimp</li>
                  <li className="secText">april 20, 2019</li>
                  <li className="secHead">cooking food with love</li>
                  <li className="secText">feb 14,2020</li>
                  <li className="secHead">modern fusion cuisine</li>
                  <li className="secText">oct 18,2019</li>
                </ul>
              </div>
              <div className="itemFgc"></div>
              <div className="itemFgc">
                <ul>
                  <li className="mainH">CONTACT INFO</li>
                  <li className="secH">
                    <img src={LocationG} alt="" /> 732/21 Second Street,
                    Manchester, King Street, Kingston United Kingdom
                  </li>
                  <li className="secT">
                    <img src={PhoneG} alt="" />
                    +65.4566743
                  </li>
                  <li className="secT">
                    <img src={MailG} alt="" /> info@theinderestauranttheme.com
                  </li>
                  <li className="secH t-transform-none">
                    <img src={GlobeG} alt="" /> theinderestaurant.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerCopyright">
            <div className="toTheTop" onClick={this.scrollToTop}>
              <img src={UpArrow} alt="" />
            </div>{" "}
            <div className="copyrightText">&copy; TheInde Restaurant-98</div>
            <div className="miniNavbar">
              <ul>
                <li>about us </li>
                <li>our chefs</li>
                <li>news</li>
                <li>delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
