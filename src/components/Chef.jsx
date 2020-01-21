import React, { Component } from "react"
import "../css/chef.css"
import Chef1 from "../assets/images/chef100.jpg"
import Chef2 from "../assets/images/chef101.jpg"
import Chef3 from "../assets/images/chef102.jpg"
import FacebookB from "../assets/svg/facebookblack.svg"
import TwitterB from "../assets/svg/twitterblack.svg"
import InstaB from "../assets/svg/instagramblack.svg"

export default class Chef extends Component {
  render() {
    return (
      <div className="chef">
        <div className="wrapperC">
          <div className="itemWc">
            <div className="imageIwc">
              <img src={Chef1} alt="" />
            </div>
            <div className="detailsIwc">
              <div className="chefName">Tessane Padares</div>
              <div className="chefSkill">french cuisine</div>
              <div className="chefSoc">
                <div>
                  <img src={FacebookB} alt="" />
                </div>
                <div>
                  <img src={InstaB} alt="" />
                </div>
                <div>
                  <img src={TwitterB} alt="" />
                </div>
              </div>
              <div className="chefDel">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aliquam et elit eu nunc rhoncus
                viverra
              </div>
            </div>
          </div>
          <div className="itemWc">
            <div className="imageIwc">
              <img src={Chef2} alt="" />
            </div>
            <div className="detailsIwc">
              <div className="chefName">Tessane Padares</div>
              <div className="chefSkill">french cuisine</div>
              <div className="chefSoc">
                <div>
                  <img src={FacebookB} alt="" />
                </div>
                <div>
                  <img src={InstaB} alt="" />
                </div>
                <div>
                  <img src={TwitterB} alt="" />
                </div>
              </div>
              <div className="chefDel">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aliquam et elit eu nunc rhoncus
                viverra
              </div>
            </div>
          </div>
          <div className="itemWc">
            <div className="imageIwc">
              <img src={Chef3} alt="" />
            </div>
            <div className="detailsIwc">
              <div className="chefName">Tessane Padares</div>
              <div className="chefSkill">french cuisine</div>
              <div className="chefSoc">
                <div>
                  <img src={FacebookB} alt="" />
                </div>
                <div>
                  <img src={InstaB} alt="" />
                </div>
                <div>
                  <img src={TwitterB} alt="" />
                </div>
              </div>
              <div className="chefDel">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aliquam et elit eu nunc rhoncus
                viverra
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
