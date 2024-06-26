import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../../images/Astrachemicals.png'
import './navigation.css';

const CardNavbar = () => {
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
    <nav className={`cnavbar ${scrolling ? 'scrolling' : ''}`}>
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
            <Link to="/#abtAstrachem" spy={true} smooth={true} duration={500} className='link' >
              About
            </Link>
          </li>
          <li className="dropdown">
            <span className='link'>Sector </span>
            <div className="dropdown-content">
              <Link to="/Domestic" spy={true} smooth={true} duration={500} >
                Domestic
              </Link>
              <Link to="/Hospitalty" spy={true} smooth={true} duration={500}>
                Hospitality
              </Link>
              <Link to="/Industrial" spy={true} smooth={true} duration={500}>
                Industrial
              </Link>
              <Link to="/Medical" spy={true} smooth={true} duration={500}>
                Medical
              </Link>
            </div>
          </li>
          {/* <li>
            <Link to="/#contactDiv" smooth={true} duration={500}>
              Contact
            </Link>
          </li> */}
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

export default CardNavbar;
