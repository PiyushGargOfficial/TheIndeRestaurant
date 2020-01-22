import React, { Component } from "react"
import HomeMainAbout from "./HomeMainAbout"
import ParallaxMenu from "./ParallaxMenu"
import MenuGrid from "./MenuGrid"
import MenuItems from "./MenuItems"
import MenuItems2 from "./MenuItems2"

import M3 from "../assets/images/m3.jpg"
import Wine from "../assets/images/wine.jpg"

export default class MainMenu extends Component {
  render() {
    return (
      <div>
        <HomeMainAbout upperText="our" lowerText="menu" />
        <MenuItems />
        <ParallaxMenu upperT="chief" lowerT="recommended" image={M3} />
        <MenuGrid />
        <ParallaxMenu upperT="wine" lowerT="selection" image={Wine} />
        <MenuItems2 />
      </div>
    )
  }
}
