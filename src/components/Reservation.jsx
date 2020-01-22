import React, { Component } from "react"
import Calender from "../assets/svg/calendar.svg"
import Clock from "../assets/svg/clock.svg"
import User from "../assets/svg/user.svg"

export default class Reservation extends Component {
  state = {
    date: "2020-01-01",
    time: "16:00",
    person: 1
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="reserSec">
        <div className="reservWrapper">
          <div className="textRs">
            Reservation available 24/7 <br />
            1.800.456.6743 – contact@theIndeRestaurant.com
          </div>
          <div className="inputRs">
            <div className="dateIrs">
              <img src={Calender} alt="" />
              <input
                type="date"
                value={this.state.date}
                onChange={this.handleChange}
                name="date"
              />
            </div>
            <div className="dateIrs">
              <img src={Clock} alt="" />
              <input
                type="time"
                value={this.state.time}
                onChange={this.handleChange}
                name="time"
              />
            </div>
            <div className="dateIrs">
              <img src={User} alt="" />
              <input
                type="number"
                min="1"
                value={this.state.person}
                max="10"
                onChange={this.handleChange}
                name="person"
              />
            </div>
          </div>
          <div className="findButton">find a table</div>
        </div>
      </div>
    )
  }
}
