import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h2 className="header-title"><span>👋</span>Hello, I'm<span className="color-bryan"> Bryan Monokai</span><span className="color-exclamation">.</span></h2>
        <h2 className="header-title">Im a full-stack web developer</h2>

        <ReactTypingEffect
          className="typed-text"
          text={["Web Design", "Web Development", "Responsive Web Design", "UI/UX"]}
          speed={200}
          eraseSpeed={200}
          eraseDelay={1000}
          typingDelay={1200}
          cursorClassName="cursor-typed"
        />
        <Link smooth={true} to="contact" className="btn-main-offer">
          <span className="text-btn">Contact me&nbsp;</span>
          <FontAwesomeIcon className="btn-main-offer__icon" icon={faArrowRight} />
        </Link>
      </div>
    </div>
  )
}

export default Header;
