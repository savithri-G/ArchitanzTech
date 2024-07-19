import React from 'react';
import ServicePage from '../images/ServicePage.mp4';
import './Services.css';


const Services = () => {
    return (
        <>
            <div style={{ marginTop: '90px' }}>
                <div className="Services-container">
                <video width="100%" autoPlay loop muted>
                    <source src={ServicePage} type="video/mp4" className="ser"/>
                 </video>
                    {/* <img src={aboutus} alt="ServicePAge" className="ser" /> */}
                </div>
            </div>

            <div className='ServiceHead mt-3 p-5'>
                <h1 class="heading"> Our <span> Services </span></h1>
                <h3 className='p-3'>We have all your needs, from micro to macro</h3>
            </div>

        <div class="Service-box-container container">
            <div className='row'>
            <div class="col-12 col-md-6 col-lg-4">
            <div class="ServiceBox">
                <h3 style={{fontWeight:"bolder",}}>WEB APP DEVELOPMENT</h3>
                <p>We bring rich and soft blended experience in information technology, 
                    customer service and global operations by continuously combining our 
                    strategic thinking with the best in Technology, People, and Process.</p>
                <a href="#" class="btn">View More</a>
            </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
            <div class="ServiceBox">
                <h3 style={{fontWeight:"bolder",}}>INFRA SERVICES</h3>
                <p>Our infrastructure services ensure seamless operations, combining advanced 
                    technology with reliable infrastructure management solutions for sustained 
                    business success and growth.</p>
                <a href="#" class="btn">View More</a>
            </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
            <div class="ServiceBox ">
                <h3 style={{fontWeight:"bolder",}}>TALENT MANAGEMENT</h3>
                <p>We offer expert talent management services, leveraging our deep industry 
                    knowledge and innovative strategies to help businesses build high-performing
                     teams and drive organizational success.</p>
                <a href="#" class="btn ">View More</a>
            </div>
            </div>
            </div>
        </div>

        
  
        </>
    )
}

export default Services;
