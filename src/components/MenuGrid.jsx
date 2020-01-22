import React, { Component } from "react"
import Gal1 from "../assets/images/gal1.jpeg"
import Gal2 from "../assets/images/gal2.jpg"
import Gal3 from "../assets/images/gal3.jpg"
import Gal4 from "../assets/images/gal4.jpg"
import Gal5 from "../assets/images/gal5.jpg"
import Gal6 from "../assets/images/gal6.jpg"
import Gal7 from "../assets/images/gal7.jpg"
import Gal8 from "../assets/images/gal8.jpg"
import SearchW from "../assets/svg/magnifying-glasswhite.svg"
import CartW from "../assets/svg/supermarketwhite.svg"
import StarW from "../assets/svg/starwhite.svg"

export default class MenuGrid extends Component {
  render() {
    return (
      <div className="menuGrid">
        <div className="menuGc">
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal1} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">imported salmon steak</div>
                <div className="mgciPrice">$18.9</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">salmon/veggies/oil</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal2} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">roasted whole chicken</div>
                <div className="mgciPrice">$30.5</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">chicken/lemon/oil</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal3} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">baked stuffed tuna</div>
                <div className="mgciPrice">$20.5</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">tuna/veggies/olives</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal4} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">deconstructed amuse bouche</div>
                <div className="mgciPrice">$15.2</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">mint/sugar/ice</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal5} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">woke fried noodles</div>
                <div className="mgciPrice">$20</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">noodles/chicken/onions</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal6} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">indian pakwaan</div>
                <div className="mgciPrice">$35</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">flat bread/curry/papad</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal7} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">fusion whole chicken</div>
                <div className="mgciPrice">$28.9</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">chicken/avagardo/taco</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem">
            <div className="imgBoxGi">
              <img src={Gal8} alt="" />
              <div className="buttonGci">
                <div className="searchIcon">
                  <img src={SearchW} alt="" />
                </div>
                <div className="cartIcon">
                  <img src={CartW} alt="" />
                </div>
              </div>
            </div>
            <div className="descBoxGi">
              <div className="descItemTitle">
                <div className="mgciName">soba chilly noodles</div>
                <div className="mgciPrice">$19.9</div>
              </div>
              <div className="descItemDetails">
                <div className="ingredientsItem">soba/chillies/pepper</div>
                <div className="mgciIcons">
                  <div className="orderIcon">order</div>
                  <div className="starIcon">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
