import React, { Component } from "react"
import "../css/schedule.css"

export default class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <div className="wrapperSc">
          <div className="headSc">OPENING HOURS</div>
          <div className="subTSc">
            Vulputate mi dui suscipit, molestie vulputate libero fusce iaculis
            suscipit. Sapien pede libero. Maecenas lacus aliquet et nisl nunc,
            per sed sed maecenas.Lectus tincidunt pellentesque augue urna sit
            sed.
          </div>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Noon</th>
                <th>Evening</th>
              </tr>
              <tr>
                <th>Monday</th>
                <td>Closed</td>
                <td>8:30pm to 10:30pm</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>Closed</td>
                <td>8:30pm to 10:30pm</td>
              </tr>
              <tr>
                <th>wednesday</th>
                <td>Closed</td>
                <td>8:30pm to 10:30pm</td>
              </tr>
              <tr>
                <th>thursday</th>
                <td>Closed</td>
                <td>8:30pm to 10:30pm</td>
              </tr>
              <tr>
                <th>friday</th>
                <td>12:00pm to 3:00pm</td>
                <td>5:30pm to 12:00pm</td>
              </tr>
              <tr>
                <th>saturday</th>
                <td>11:00am to 5:00pm(brunch)</td>
                <td>5:30pm to 12:00pm</td>
              </tr>
              <tr>
                <th>sunday</th>
                <td>11:00am to 5:00pm(brunch)</td>
                <td>5:30pm to 12:00pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
