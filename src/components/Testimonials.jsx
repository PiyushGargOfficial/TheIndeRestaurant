import React, { Component } from "react"
import "../css/testimonials.css"
import StarW from "../assets/svg/starwhite.svg"
import Reviewer1 from "../assets/images/chef101.jpg"
import Reviewer2 from "../assets/images/chef100.jpg"
import Reviewer3 from "../assets/images/chef102.jpg"

export default class Testimonials extends Component {
  state = {
    active: "review1"
  }

  handleId = async e => {
    var allCircles = document.querySelectorAll(".circles")
    allCircles.forEach(el => {
      el.classList.remove("selected")
    })
    e.target.classList.add("selected")
    var active = e.target.getAttribute("data-testm")
    this.setState({ active }, () => {
      this.handleTest()
    })
  }

  handleTest = () => {
    var allTestimonials = document.querySelectorAll(".testimonial")
    allTestimonials.forEach(el => {
      el.classList.remove("selected")
    })
    var id = this.state.active
    var activeTest = document.querySelector(`#${id}`)
    activeTest.classList.add("selected")
  }

  render() {
    return (
      <div className="testM">
        <div className="wrapperTm">
          <div className="detailsWrapper">
            <div className="testimonial selected" id="review1">
              <div className="starsR">
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
              </div>
              <div className="textR">
                Vivamus aliquet felis eu diam ultricies congue. Morbi porta
                lorem nec consectetur porta. Sed quis dui elit. Pellentesque
                habitant morbi tristique senectus et netus et male Sed
                vestibulum orci
              </div>
              <div className="imageR">
                <img src={Reviewer1} alt="" />
              </div>
              <div className="nameR">mark anthony</div>
            </div>
            <div className="testimonial" id="review2">
              <div className="starsR">
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
              </div>
              <div className="textR">
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Pellentesque
                habitant morbi tristique senectus et netus et male.
              </div>
              <div className="imageR">
                <img src={Reviewer2} alt="" />
              </div>
              <div className="nameR">tessa charles</div>
            </div>
            <div className="testimonial" id="review3">
              <div className="starsR">
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
                <img src={StarW} alt="" />
              </div>
              <div className="textR">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Sed vestibulum orci quam.
                Pellentesque habitant morbi tristique senectus et netus et male.
              </div>
              <div className="imageR">
                <img src={Reviewer3} alt="" />
              </div>
              <div className="nameR">amy watson</div>
            </div>
          </div>
          <div className="circlesWrapper">
            <div
              className="selected circles"
              data-testm="review1"
              onClick={this.handleId}
            ></div>
            <div
              data-testm="review2"
              className="circles"
              onClick={this.handleId}
            ></div>
            <div
              data-testm="review3"
              className="circles"
              onClick={this.handleId}
            ></div>
          </div>
        </div>
      </div>
    )
  }
}
