import React from "react"
import { Switch, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MainHome from "./components/MainHome"
import MainAbout from "./components/MainAbout"
import MainMenu from "./components/MainMenu"
import MainServices from "./components/MainServices"
import MainBlog from "./components/MainBlog"
import MainContact from "./components/MainContact"

import "./css/essentials.css"
import "./css/home.css"
import "./css/navbar.css"
import "./css/about.css"
import "./css/about2.css"
import "./css/parallaxMenu.css"
import "./css/menuGrid.css"
import "./css/reservation.css"
import "./css/footer.css"
import "./css/tableBook.css"

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={MainHome} />
        <Route path="/about" exact component={MainAbout} />
        <Route path="/menu" exact component={MainMenu} />
        <Route path="/services" exact component={MainServices} />
        <Route path="/blog" exact component={MainBlog} />
        <Route path="/contact" exact component={MainContact} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
