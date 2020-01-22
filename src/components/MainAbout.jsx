import React, { Component } from "react"
import "../css/mainaboutabout.css"
import HomeMainAbout from "./HomeMainAbout"
import MainAboutAbout from "./MainAboutAbout"
import ParallaxMenu from "./ParallaxMenu"
import DiningExp from "./DiningExp"
import Chef from "./Chef"
import Testimonials from "./Testimonials"
import Branches from "./Branches"

import Image3 from "../assets/images/chefs2.jpg"

export default class MainAbout extends Component {
  render() {
    return (
      <div>
        <HomeMainAbout upperText="More" lowerText="about us" />
        <MainAboutAbout />
        <DiningExp />
        <ParallaxMenu upperT="our" lowerT="chefs" image={Image3} />
        <Chef />
        <Testimonials />
        <Branches />
      </div>
    )
  }
}
