import React, { Component } from "react"
import HomeMainAbout from "./HomeMainAbout"
import OurStory4 from "./OurStory4"
import DiningExp from "./DiningExp"
import Counter from "./Counter"

import Delivery from "../assets/images/delivery.jpg"
import Category from "../assets/images/ourrest.jpg"

export default class MainServices extends Component {
  render() {
    return (
      <div>
        <HomeMainAbout upperText="our" lowerText="services" />
        <OurStory4
          upperA="food"
          lowerA="delivery"
          textA="Donec elit libero, sodales nec, volutpat a,
        suscipit non, turpis. Nullam sagittis. Suspendisse 
        pulvinar, augue ac venenatis condimentum, sem libero
        volutpat nibh, nec pellentesque velit pede quis nunc.
        Vestibulia Curae; Fusce id purus. Ut varius tincidunt
        libero. Phasellus dolor. Maecenas vestibulum mollis"
          textM="Donec elit libero, sodales nec, volutpat a,
        suscipit non, turpis. Nullam sagittis. Suspendisse 
        pulvinar"
          imageA={Delivery}
          colorA="#fff"
        />
        <Counter />
        <DiningExp />
        <OurStory4
          upperA="custom"
          lowerA="catering"
          textA="Donec elit libero, sodales nec, volutpat a,
        suscipit non, turpis. Nullam sagittis. Suspendisse 
        pulvinar, augue ac venenatis condimentum, sem libero
        volutpat nibh, nec pellentesque velit pede quis nunc.
        Vestibulia Curae; Fusce id purus. Ut varius tincidunt
        libero. Phasellus dolor. Maecenas vestibulum mollis"
          textM="Donec elit libero, sodales nec, volutpat a,
        suscipit non, turpis. Nullam sagittis. Suspendisse 
        pulvinar"
          imageA={Category}
          colorA="#fff"
        />
      </div>
    )
  }
}
