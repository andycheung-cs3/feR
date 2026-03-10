// import React from 'react'
import SocialLinks from "./SocialLinks"
import PageLinks from "./PageLinks"
import {pageLinks, socialLinks} from "../../data"
import logo from "../assets/logo.svg"
import {useState} from "react"
const Navbar = () => {
    const [isTogghled,setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!isTogghled);
    }
  return (
    <nav className="navbar">
            <div className="container navbar-flex">
              {/* fix href */}
                <a href="#home" className="logo">
                    {/* <img src="./assets/logo.svg" alt=""  /> */}
                    <img src={logo} alt=""  />
                </a>
                <div className="main-menu">
                    <ul className="main-menu-list">
                        <PageLinks />
                      
                        {/* <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#tours">Tours</a></li> */}
                    </ul>
                    <ul className="main-menu-icons">
                        <SocialLinks />
                        {/* <li><a href="https://www.facebook.com" target="_blank" className="nav-icon">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        </li>
                        <li><a href="http://www.instagram.com" target="_blank" className="nav-icon">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        </li>
                        <li><a href="https://www.twitter.com" target="_blank" className="nav-icon">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        </li> */}
                        
                    </ul>
                </div>
                <div className="mobile-menu">
                    <div className="mobile-menu-toggle" onClick={handleToggle}>
                      <i className="fa-solid fa-bars"></i></div>
                    <div className="mobile-menu-items">
                    {/* <div className={`mobile-menu-items ${isTogghled ? "active" : ""}`}> */}
                    {/* <ul className="mobile-menu-list"> */}
                    <ul className={`mobile-menu-list ${isTogghled ? "active" : ""}`}>
                        <PageLinks />
                        {/* <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#tours">Tours</a></li> */}
                    </ul>
                </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
