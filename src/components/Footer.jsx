// import React from 'react'
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="section footer">
        <ul className="footer-menu-list">
                    <PageLinks />
                    {/* <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#tours">Tours</a></li> */}
                </ul>
                <ul className="footer-menu-icons">
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
                    {/* <!-- <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li> --> */}
                </ul>
                {/* fix date */}
                <p>Copyright &copy; Andy travel tours company <span id="date">{new Date().getFullYear()}</span> all rights reserved</p>
    </footer>
  )
}

export default Footer
