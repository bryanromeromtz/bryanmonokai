import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedinIn, faCodepen } from '@fortawesome/free-brands-svg-icons';
import DoubleArrowSharpIcon from '@material-ui/icons/DoubleArrowSharp';

const Footer = () => {
  return (
    <div className="footer">
      <Link smooth={true} to="home" className="scroll-top-btn pulsate-bck">
        <DoubleArrowSharpIcon className="double-arrow" />
      </Link>
      <div className="container-sm footer-wrapper">

        <ul className="social-media ">
          {/* social media instagram */}
          <li>
            <a href="https://www.instagram.com/bryan_madeon/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-up" icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.instagram.com/bryan_madeon/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-down" icon={faInstagram} />
            </a>
          </li>

          {/* social media github */}
          <li>
            <a href="https://github.com/bryanromeromtz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-up" icon={faGithub} size="2x" />
            </a>
            <a href="https://github.com/bryanromeromtz" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-down" icon={faGithub} />
            </a>
          </li>

          {/* social media linkedIN */}
          <li>
            <a href="https://www.linkedin.com/in/bryan-romero-7995021a8/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-up" icon={faLinkedinIn} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/bryan-romero-7995021a8/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-down" icon={faLinkedinIn} />
            </a>
          </li>

          {/* social media codepen */}
          <li>
            <a href="https://codepen.io/bryant_romero" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-up" icon={faCodepen} size="2x" />
            </a>
            <a href="https://codepen.io/bryant_romero" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="social-size-down" icon={faCodepen} />
            </a>
          </li>
        </ul>
        <div className="copy-rights">
          <p className="p-3 text-center foot-note">
            BRYAN MONOKAI<span className="space-copy"> &copy;{new Date().getFullYear()}&nbsp;
            </span>
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer;
