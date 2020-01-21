import React, { Component } from "react"
import Home from "./Home"
import Aboutus from "./Aboutus"
import Aboutus2 from "./Aboutus2"
import ParallaxMenu from "./ParallaxMenu"
import MenuGrid from "./MenuGrid"
import Reservation from "./Reservation"

import Image1 from "../assets/images/m3.jpg"
import Image2 from "../assets/images/rest1.jpg"

export default class MainHome extends Component {
  render() {
    return (
      <div>
        <Home />
        <Aboutus />
        <ParallaxMenu upperT="our" lowerT="menus" image={Image1} />
        <MenuGrid />
        <ParallaxMenu upperT="our" lowerT="restaurant" image={Image2} />
        <Aboutus2 />
        <Reservation />
      </div>
    )
  }
}
