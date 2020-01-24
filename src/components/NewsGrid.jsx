import React, { Component } from "react"
import "../css/newsgrid.css"
import Image1 from "../assets/images/home22.jpg"
import Image2 from "../assets/images/about.jpg"
import Image3 from "../assets/images/gal7.jpg"
import Image4 from "../assets/images/ourrest.jpg"
import Image5 from "../assets/images/Home.jpg"
import Image6 from "../assets/images/chefs2.jpg"

export default class NewsGrid extends Component {
  handlePageN = e => {
    var allPageN = document.querySelectorAll(".pageN")
    allPageN.forEach(page => {
      page.classList.remove("pageOn")
    })
    e.target.classList.add("pageOn")
  }

  render() {
    return (
      <div className="newsGrid">
        <div className="newsGridWrapper">
          <div className="newsMg">
            <div className="itemNmg">
              <div className="headNmg">Black Spaghetti with Rock Shrimp</div>
              <div className="subTextNmg">
                APRIL 20, 2015 IN ITALIAN &nbsp;
                <span>READ MORE</span>
              </div>
              <div className="imgNmg">
                <img src={Image1} alt="" />
              </div>
              <div className="mainTNmg">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus...
              </div>
            </div>
            <div className="itemNmg">
              <div className="headNmg">cooking food with love</div>
              <div className="subTextNmg">
                APRIL 18, 2015 IN ITALIAN &nbsp;
                <span>READ MORE</span>
              </div>
              <div className="imgNmg">
                <img src={Image2} alt="" />
              </div>
              <div className="mainTNmg">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus...
              </div>
            </div>
            <div className="itemNmg">
              <div className="headNmg">modern fusion cuisine</div>
              <div className="subTextNmg">
                APRIL 17, 2015 IN Recipe &nbsp;
                <span>READ MORE</span>
              </div>
              <div className="imgNmg">
                <img src={Image3} alt="" />
              </div>
              <div className="mainTNmg">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus...
              </div>
            </div>
            <div className="itemNmg">
              <div className="headNmg">Amazing Dining Experience Begins</div>
              <div className="subTextNmg">
                APRIL 16, 2015 IN Cooking &nbsp;
                <span>READ MORE</span>
              </div>
              <div className="imgNmg">
                <img src={Image4} alt="" />
              </div>
              <div className="mainTNmg">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus...
              </div>
            </div>
            <div className="itemNmg">
              <div className="headNmg">our premium food recipe</div>
              <div className="subTextNmg">
                APRIL 9, 2015 IN Asian &nbsp;
                <span>READ MORE</span>
              </div>
              <div className="imgNmg">
                <img src={Image5} alt="" />
              </div>
              <div className="mainTNmg">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus...
              </div>
            </div>
            <div className="itemNmg">
              <div className="headNmg">life is a combination of cooking</div>
              <div className="subTextNmg">
                APRIL 5, 2015 IN cooking &nbsp;
                <span>READ MORE</span>
              </div>
              <div className="imgNmg">
                <img src={Image6} alt="" />
              </div>
              <div className="mainTNmg">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetur Nulla fringilla purus...
              </div>
            </div>
          </div>
          <div className="nextMg">
            <div className="pageNDisplay">
              <div className="page1 pageN pageOn" onClick={this.handlePageN}>
                1
              </div>
              <div className="page2 pageN" onClick={this.handlePageN}>
                2
              </div>
            </div>
            <div className="pageNDel">Page 1 of 2</div>
          </div>
        </div>
      </div>
    )
  }
}
