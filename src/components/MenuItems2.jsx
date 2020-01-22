import React, { Component } from "react"
import "../css/menuitems2.css"
import StarW from "../assets/svg/starwhite.svg"

export default class MenuItems extends Component {
  render() {
    return (
      <div className="mainMG2">
        <div className="wrapperMmg">
          <div className="headMmg">
            <div className="wrapperHmmg">alcoholic beverages</div>
          </div>
          <div className="menuItemGrid">
            <div className="menuItem">
              <div className="nameMi">
                <div className="nameMiu">baked potato pizza</div>
                <div className="priceMiu">$12</div>
              </div>
              <div className="detailsMi">
                <div className="nameMid">potato / bread / cheese</div>
                <div className="barMid">
                  <div className="orderMid">order</div>
                  <div className="starMid">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="nameMi">
                <div className="nameMiu">
                  PORK TENDERLOIN MARINATED IN YOGURT
                </div>
                <div className="priceMiu">$20</div>
              </div>
              <div className="detailsMi">
                <div className="nameMid">Pork / Tenderloin / Yogurt</div>
                <div className="barMid">
                  <div className="orderMid">order</div>
                  <div className="starMid">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="nameMi">
                <div className="nameMiu">
                  GRILLED PORK WITH PRESERVED LEMONS
                </div>
                <div className="priceMiu">$22</div>
              </div>
              <div className="detailsMi">
                <div className="nameMid">Pork / Lemons / Onions</div>
                <div className="barMid">
                  <div className="orderMid">order</div>
                  <div className="starMid">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="nameMi">
                <div className="nameMiu">LEMON-ROSEMARY CHICKEN</div>
                <div className="priceMiu">$19.9</div>
              </div>
              <div className="detailsMi">
                <div className="nameMid">Chicken / Rosemary / Lemon</div>
                <div className="barMid">
                  <div className="orderMid">order</div>
                  <div className="starMid">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="nameMi">
                <div className="nameMiu">
                  APPLE SMOKED CHICKEN WITH WHITE SAUCE
                </div>
                <div className="priceMiu">$18.9</div>
              </div>
              <div className="detailsMi">
                <div className="nameMid">Chicken / Apple / Tomatos</div>
                <div className="barMid">
                  <div className="orderMid">order</div>
                  <div className="starMid">
                    <img src={StarW} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="menuItem">
              <div className="nameMi">
                <div className="nameMiu">
                  GRILLED HANGER STEAK WITH HARISSA AND PICKLED ONIONS
                </div>
                <div className="priceMiu">$29.9</div>
              </div>
              <div className="detailsMi">
                <div className="nameMid">Beef / Onions / Tomatos</div>
                <div className="barMid">
                  <div className="orderMid">order</div>
                  <div className="starMid">
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
