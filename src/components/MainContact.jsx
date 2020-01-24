import React, { Component } from "react"
import HomeMainAbout from "./HomeMainAbout"
import ContactBranch from "./ContactBranch"
import Schedule from "./Schedule"

import Branch1 from "../assets/images/ourrest.jpg"
import Branch2 from "../assets/images/rest1.jpg"
import Branch3 from "../assets/images/rest2.jpg"
import Branch4 from "../assets/images/rest3.jpg"

export default class MainContact extends Component {
  render() {
    return (
      <div>
        <HomeMainAbout upperText="our" lowerText="contact" />
        <ContactBranch
          styleI={styleImageL}
          styleD={styleDetailsR}
          image={Branch1}
          branchName="paragon"
          upperA="732/21 Second Street, Manchester"
          lowerA="King Street, Kingston United Kingdom"
          phoneN="1.800.456.6743"
        />
        <ContactBranch
          styleI={styleImageR}
          styleD={styleDetailsL}
          image={Branch2}
          branchName="center"
          upperA="78/31 Third Street, LiverPool "
          lowerA="King Street, Kingston United Kingdom"
          phoneN="1.800.456.6756"
        />
        <ContactBranch
          styleI={styleImageL}
          styleD={styleDetailsR}
          branchName="zen"
          upperA="735/25 Second Street,"
          lowerA="Oliver King Street, Kingston United Kingdom"
          phoneN="1.800.456.2343"
          image={Branch3}
        />
        <ContactBranch
          styleI={styleImageR}
          branchName="delhi"
          upperA="72/1 Second Street,"
          lowerA=" Rohini Street, New Delhi, India"
          phoneN="1.800.456.6743"
          styleD={styleDetailsL}
          image={Branch4}
        />
        <Schedule />
      </div>
    )
  }
}

const styleImageL = {
  position: "absolute",
  top: 0,
  left: 0
}

const styleDetailsR = {
  position: "absolute",
  top: "10%",
  right: 0
}

const styleImageR = {
  position: "absolute",
  top: 0,
  right: 0
}

const styleDetailsL = {
  position: "absolute",
  top: "10%",
  left: 0
}
