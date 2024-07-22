import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import scroll from '../images/scroll.png';
import './Footer.css';

const Footer = () => {
    const [showNews, setShowNews] = useState(false);
    const newsRef = useRef(null);

    const handleNewsClick = (event) => {
        event.preventDefault();
        setShowNews(!showNews);
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClickOutside = (event) => {
    if (newsRef.current && !newsRef.current.contains(event.target) && event.target.id !== 'news-btn') {
      setShowNews(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
    <div className='mt-5 foothead'>
    <footer className=" text-dark text-center py-4 mt-5 footBox">
      <div className="container footerBox">
        <div className="mb-4 ">
          <a href="https://facebook.com" className= "me-4 ico">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" className="me-4 ico">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="me-4 ico">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" className="me-4 ico">
            <FaLinkedin />
          </a>
          <a href="news" className="news ico" id="news-btn"  onClick= {handleNewsClick}>
          <i class="fa-solid fa-envelope-open-text"></i>
          </a>
        </div>
        <p className="mb-0 copy" >&copy; 2024 <a href="/Home" className='site'>
        www.architanz.com.</a> All rights reserved | Architanz Technologies.</p>
        <div className="scroll">
          <img src={scroll} alt="scroll" onClick= {handleScrollToTop} />
        </div>
      </div>
    
      {showNews && (
      <form action="" class="login-form" ref={newsRef}>
            <h3>Newsletter</h3>
            <input type="email" placeholder="enter your email" class="box"/>
            <input type="submit" value="Subscribe" class="btns" name=""/>
        </form>
      )}
    </footer>
    </div>
    </>
  );
};

export default Footer;
