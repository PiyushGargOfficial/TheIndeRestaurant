import React, { Component } from "react"
import HomeMainAbout from "./HomeMainAbout"
import NewsGrid from "./NewsGrid"

export default class MainBlog extends Component {
  render() {
    return (
      <div>
        <HomeMainAbout upperText="our" lowerText="blog" />
        <NewsGrid />
      </div>
    )
  }
}
