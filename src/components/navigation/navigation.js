import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../images/Astrachemicals.png'
import './navigation.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className={`menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" spy={true} smooth={true} duration={500} className='link'>
              Home
            </Link>
          </li>
          <li>
            <ScrollLink to="abtAstrachem" spy={true} smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="dropdown">
            <span>Sector </span>
            <div className="dropdown-content">
              <Link to="/Domestic">
                Domestic
              </Link>
              <Link to="/Hospitalty">
                Hospitality
              </Link>
              <Link to="/Industrial">
                Industrial
              </Link>
              <Link to="/Medical">
                Medical
              </Link>
            </div>

          </li>
          <li>
            <ScrollLink to="contactDiv" spy={true} smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'active' : ''}`} />
        <div className={`bar ${isOpen ? 'active' : ''}`} />
        <div className={`bar ${isOpen ? 'active' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
