import React, { Component } from "react"
import FounderSec from "./FounderSec"
import OurStory from "./OurStory"

export default class Aboutus extends Component {
  render() {
    return (
      <div className="about">
        <FounderSec />
        <OurStory />
      </div>
    )
  }
}
