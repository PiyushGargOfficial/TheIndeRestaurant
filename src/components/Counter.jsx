import React, { Component } from "react"
import "../css/counter.css"
import CountUp from "react-countup"

export default class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <div className="wrapperC">
          <div>
            <div className="numberWc" id="yoe">
              <CountUp end={20} duration={5} delay={2} />
            </div>
            <div className="nameWc">years of experience</div>
          </div>
          <div>
            <div className="numberWc">
              <CountUp end={12} duration={5} delay={2} />
            </div>
            <div className="nameWc">award winning chiefs</div>
          </div>
          <div>
            <div className="numberWc">
              <CountUp end={23500} delay={2} start={1} duration={5} />
            </div>
            <div className="nameWc">customers served</div>
          </div>
          <div>
            <div className="numberWc">
              <CountUp end={85} duration={5} delay={2} />
            </div>
            <div className="nameWc">dishes</div>
          </div>
          <div>
            <div className="numberWc">
              <CountUp end={15} duration={5} delay={2} />
            </div>
            <div className="nameWc">awards</div>
          </div>
        </div>
      </div>
    )
  }
}
