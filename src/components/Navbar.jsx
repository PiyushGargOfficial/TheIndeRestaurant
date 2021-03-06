import React, { Component } from "react"
import LocationW from "../assets/svg/locationwhite.svg"
import PhoneW from "../assets/svg/phonewhite.svg"
import FacebookW from "../assets/svg/facebookwhite.svg"
import YoutubeW from "../assets/svg/youtubewhite.svg"
import PinterestW from "../assets/svg/pinterestwhite.svg"
import TwitterW from "../assets/svg/twitterwhite.svg"
import InstaW from "../assets/svg/instagramwhite.svg"
import CloseW from "../assets/svg/closewhite.svg"

export default class Navbar extends Component {
  state = {
    isTop: true,
    name: "",
    email: "",
    phone: "",
    seat: 1,
    date: "2020-01-01",
    time: "16:00"
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    document.querySelector(".booking").style.display = "none"
    document.documentElement.style.overflow = "auto" // firefox, chrome
    document.body.scroll = "yes" // ie only
  }

  ShowBooking = () => {
    if (window.scrollY === 0) {
      document.querySelector(".booking").style.display = "flex"
      document.documentElement.style.overflow = "hidden" // firefox, chrome
      document.body.scroll = "no"
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      document.querySelector(".booking").style.display = "flex"
      document.documentElement.style.overflow = "hidden" // firefox, chrome
      document.body.scroll = "no"
    }
  }

  render() {
    const { isTop } = this.state

    return (
      <div>
        <div className="booking">
          <div className="bookingWrapper">
            <div className="closeB">
              <img src={CloseW} alt="" onClick={this.handleClick} />
            </div>
            <div className="titleB">
              <span> table </span>
              booking
            </div>
            <div className="gridB">
              <div className="gridItemB">
                <div className="secNameB">name</div>
                <input
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="gridItemB">
                <div className="secNameB">email</div>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="gridItemB">
                <div className="secNameB">phone</div>
                <input
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
              <div className="gridItemB">
                <div className="secNameB">date</div>
                <input
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.date}
                />
              </div>
              <div className="gridItemB">
                <div className="secNameB">time</div>
                <input
                  type="time"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.time}
                />
              </div>
              <div className="gridItemB">
                <div className="secNameB">seats</div>
                <input
                  type="number"
                  name="seat"
                  onChange={this.handleChange}
                  value={this.state.seat}
                />
              </div>
            </div>
            <div className="specialReq">
              <div className="secNameB">special requests</div>
              <textarea type="text" />
            </div>
            <div className="bookNowBtn">book now</div>
          </div>
        </div>
        <div className="header">
          <div className={isTop ? "discount" : "discount scrolled"}>
            <div className="disInfo">
              <img src={LocationW} alt="" />
              732/21 Second Street, MG Road, Delhi, India <span></span>
              <img src={PhoneW} alt="" />
              +91 000000
            </div>
            <div className="disSocial">
              <img src={FacebookW} alt="" />
              <img src={TwitterW} alt="" />
              <img src={PinterestW} alt="" />
              <img src={YoutubeW} alt="" />
              <img src={InstaW} alt="" />
            </div>
          </div>
          <div className={isTop ? "navbar" : "navbar scrolled"}>
            <div className="navLogo">
              <span>the inde</span>
              restaurant
            </div>
            <div className="navItems">
              <ul>
                <li className="current">home</li>
                <li>about</li>
                <li>menu</li>
                <li>services</li>
                <li>blog</li>
                <li>contact</li>
                <li
                  className={
                    isTop
                      ? "whiteBorder cursor-pointer"
                      : "blackBorder cursor-pointer"
                  }
                  onClick={this.ShowBooking}
                >
                  reservation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
