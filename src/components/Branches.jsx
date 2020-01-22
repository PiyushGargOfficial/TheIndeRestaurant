import React, { Component } from "react"
import "../css/branches.css"
import LocationG from "../assets/svg/pinGrey.svg"

export default class Branches extends Component {
  render() {
    return (
      <div className="branches">
        <div className="wrapperB">
          <div className="headB">
            <span>restaurant</span>branches
          </div>
          <div className="gridB">
            <div className="itemGb">
              <div className="headIgb">grand restaurant paragon</div>
              <div className="addressIgb">
                732/21 Second Street, Manchester King Street, Kingston United
                Kingdom
              </div>
              <div className="phoneIgb">1.800.456.6743</div>
              <div className="getDirIgb">
                {" "}
                <img src={LocationG} alt="" />
                Get Directions
              </div>
            </div>
            <div className="itemGb">
              <div className="headIgb">grand restaurant center</div>
              <div className="addressIgb">
                78/31 Third Street, LiverPool King Street, Kingston United
                Kingdom
              </div>
              <div className="phoneIgb">1.800.456.6756</div>
              <div className="getDirIgb">
                <img src={LocationG} alt="" />
                Get Directions
              </div>
            </div>
            <div className="itemGb">
              <div className="headIgb">grand restaurant zen</div>
              <div className="addressIgb">
                735/25 Second Street,Oliver King Street, Kingston United Kingdom
              </div>
              <div className="phoneIgb">1.800.456.2343</div>
              <div className="getDirIgb">
                <img src={LocationG} alt="" />
                Get Directions
              </div>
            </div>
            <div className="itemGb">
              <div className="headIgb">grand restaurant delhi</div>
              <div className="addressIgb">
                72/1 Second Street, Rohini Street, New Delhi, India
              </div>
              <div className="phoneIgb">1.800.456.6743</div>
              <div className="getDirIgb">
                <img src={LocationG} alt="" />
                Get Directions
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
