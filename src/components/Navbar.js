import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from '../static/assets/logo-b.png';


const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    function fixedNavbar() {
      //console.log(window.scrollY);
      if (window.scrollY >= 739) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
    window.addEventListener("scroll", fixedNavbar);
    return () => {
      window.removeEventListener("scroll", fixedNavbar);
    }
  }, []);



  return (
    <header className={`${navbar ? "fade-in-top fixed-top" : "fade-in"}`}>
      <nav className={`${navbar ? "navbar navbar-expand-lg navbar-light navbar-transparent" : "navbar navbar-expand-lg navbar-light"}`}>
        <div className="container navbar-wrapper">

          <a className="navbar-brand" href="#top"><img className="logo" src={Logo} alt="logo..."></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link smooth={true} to="home" className="nav-link" href="#" offset={-100} spy={true} duration={500}>Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" className="nav-link" href="#" offset={-100} spy={true} duration={500}>about</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experience" className="nav-link" href="#" offset={-100} spy={true} duration={500}>Experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" className="nav-link" href="#" offset={-100} spy={true}>portfolio</Link>
              </li>

              <li className="nav-item">
                <Link smooth={true} to="contact" className="nav-link" href="#" offset={-20} spy={true} duration={500}>contact</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <div className="border-line"></div>
    </header>
  )
}

export default Navbar;