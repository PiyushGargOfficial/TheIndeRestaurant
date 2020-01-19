import React from "react"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Aboutus from "./components/Aboutus"
import Aboutus2 from "./components/Aboutus2"
import ParallaxMenu from "./components/ParallaxMenu"
import ParallaxMenu2 from "./components/ParallaxMenu2"
import MenuGrid from "./components/MenuGrid"
import Reservation from "./components/Reservation"
import Footer from "./components/Footer"
import "./css/essentials.css"
import "./css/home.css"
import "./css/navbar.css"
import "./css/about.css"
import "./css/about2.css"
import "./css/parallaxMenu.css"
import "./css/parallaxMenu2.css"
import "./css/menuGrid.css"
import "./css/reservation.css"
import "./css/footer.css"
import "./css/tableBook.css"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutus />
      <ParallaxMenu />
      <MenuGrid />
      <ParallaxMenu2 />
      <Aboutus2 />
      <Reservation />
      <Footer />
    </div>
  )
}

export default App
