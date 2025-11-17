import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./scrollToTop"
function App() {
  return (
    <>
    <ScrollToTop/>
    <div className="">
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}

export default App
