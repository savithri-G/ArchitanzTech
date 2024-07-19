import React, { useState,useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import logo from '../img/logo/logo.png';

const Header = () => {
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);

 
  const handlePhoneClick = () => {
    setShowPhoneNumbers(!showPhoneNumbers);
    setShowMail(false);
  };

  const handleMailClick = () => {
    setShowMail(!showMail);
    setShowPhoneNumbers(false);
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target.id !== 'menu-btn') {
      setMenuOpen(false);
    } 
    if (phoneRef.current && !phoneRef.current.contains(event.target) && event.target.id !== 'phone-btn') {
      setShowPhoneNumbers(false);
    }
    if (mailRef.current && !mailRef.current.contains(event.target) && event.target.id !== 'mail-btn') {
      setShowMail(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  
  return (
    <>
      <section className="header">
        <a href="/Home" className="logo">
          <img src={logo} alt="logo"/>
        </a>
        <nav ref={menuRef} className={`navbar ${menuOpen ? 'active' : ''}`}>
          <NavLink exact to="/Home" onClick={handleLinkClick} >Home</NavLink  >
          <NavLink to="/About" onClick={handleLinkClick} >About Us</NavLink  >
          <NavLink to="/Services" onClick={handleLinkClick}>Services</NavLink  >
          <NavLink to="/Careers" onClick={handleLinkClick} >Careers</NavLink  >
          <NavLink to="/Contact" onClick={handleLinkClick} >Contact Us</NavLink  >

        </nav>
        <div className="icons">
          <div className="fas fa-bars" id="menu-btn" onClick= {handleMenuClick}></div>
          <div className="fas fa-phone" id="phone-btn" onClick={handlePhoneClick}></div>
          <div className="fas fa-envelope" id="mail-btn" onClick={handleMailClick}></div>
        </div>
        {showPhoneNumbers && (
          <div ref={phoneRef} className="phone">
            <p>+(91)-7733881775 / +(91)-7733881776</p>
          </div>
        )}
        {showMail && (
          <div ref={mailRef} className="phone">
            <p><a href="mailto:info@architanz.com">info@architanz.com</a></p>
          </div>
        )}
        
      </section>
    </>
  );
};

export default Header;
