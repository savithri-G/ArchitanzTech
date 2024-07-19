import React from 'react';
import HomePage from '../images/HomePage.mp4';
import HomePic from '../images/HomePic.png';
import HomePic1 from '../images/HomePic1.png';
import './Home.css';
const Home = () => {
  return (
    <>
      {/* <div style={{ marginTop: '100px' }}>
        <marquee><h2>CONSULT  &nbsp;&nbsp; <span>BUILD  &nbsp;&nbsp;</span><span>SUCCEED </span></h2></marquee>
      </div> */}
      <div style={{ marginTop: '90px' }}>
        <div className="image-container">
          <video width="100%" autoPlay loop muted>
            <source src={HomePage} type="video/mp4" className="background-image"/>
          </video>
        </div>
      </div>
        {/* <div className="overlay">
          <h1>ARCHITANZ TECHNOLOGIES</h1>
          <p>Consult. Build. Succeed.</p>
          <p>Your IT Partner: Comprehensive App Development, Seamless Infrastructure Services, Strategic Talent Consulting.</p>
        </div> */}
      

      <div className='Head1'>
        <h1 class="heading"><span> About </span> Us </h1>
      </div>
      <div className='images-row mt-3 p-5'>
        <div className="imagess-container col-12">
          <img src={HomePic1} alt="Background" className="background" />
          <div className="overlayText">
            <span>From the smallest IT puzzle pieces to the 
              grandest architectural designs, we're your go-to solution provider</span>
          </div>
        </div>
        <div className="imagess-container col-12">
          <img src={HomePic} alt="Background" className="background" />
          <div className="overlayText">
            <span>Architanz Technologies offers comprehensive IT solutions for businesses of all sizes. 
              Our services encompass designing and implementing software applications that streamline and 
              automate various business processes, empowering our clients to achieve greater efficiency 
              and productivity.</span>
          </div>
        </div>
      </div>


    </>
  );
};

export default Home;
