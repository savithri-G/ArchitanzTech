import React from 'react';
import './About.css';
import AboutPage from '../images/AboutPage.mp4';
import Quality from '../images/Quality.png';
import Reliability from '../images/Reliability.png';
import Experience from '../images/Experience.png';
import Analysis from '../images/Analysis.png';



const About = () => {
    return (
        <>
            <div style={{ marginTop: '90px' }}>
                <div className="about-container">
                <video width="100%" autoPlay loop muted>
                    <source src={AboutPage} type="video/mp4" className="abt"/>
                </video>
                    {/* <img src={hero2} alt="aboutpage" className="abt img-fluid " /> */}
                </div>
            </div>

            <div className='aboutOverlay  p-5'>
                <div className='row'>
                    <div className='aboutOver col-12'>
                        <h1 class="heading"> <span> About </span> Us </h1>
                        <p className='p-3'> At Architanz, we are dedicated to leading the IT industry on a global scale.
                            With a commitment to excellence, we strive to deliver tailored solutions that
                            drive efficiency, productivity, and success. Our team of experts is passionate
                            about pushing the boundaries of technology and delivering exceptional results
                            for our clients. Together, we aim to shape the future of IT services,
                            empowering our clients to thrive in an increasingly digital world. </p>
                    </div>
                    <div className='aboutOver col-12'>
                        <h1 class="heading"> Our <span> Mission </span></h1>
                        <p className='mb-1 pt-3'>  To empower individuals and businesses with innovative technology solutions
                            that drive growth, efficiency, and success. We are committed to delivering
                            xcellence in IT services, leveraging cutting-edge practices to anticipate
                            and satisfy the evolving needs of our clients.  </p>
                    </div>
                </div>
            </div>
            <div className='aboutOver text-center mb-5 '>
                <h1 class="heading"> <span> Features </span> Here </h1>
                <h3 className=''>To increase productivity and cost effectiveness on the market.</h3>
            </div>
            <section class="categories mt-5">
                <div class="box-container container">
                    <div className='row'>
                        <div className='col-xl-3 col-lg-4 col-md-6 mb-4'>
                            <div class="box text-center p-3 ">
                                <img src={Quality} alt="Quality" className="img-fluid mb-3 AboutIco" />
                                <h3>Quality</h3>
                                <p>We are committed to upholding the highest standards of quality in
                                    every aspect of our work, ensuring that our products and services
                                    consistently meet and exceed the expectations of our clients.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            <div class="box text-center p-3">
                                <img src={Reliability} alt="Reliability " className="img-fluid mb-3 AboutIco" />
                                <h3>Reliability</h3>
                                <p>Reliability is the cornerstone of our business. Our clients trust us
                                    to deliver on our promises, providing dependable solutions and support
                                    that they can rely on day in and day out.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            <div class="box text-center p-3">
                                <img src={Experience} alt="Experience" className="img-fluid mb-3 AboutIco" />
                                <h3>Experience</h3>
                                <p>Backed by years of industry expertise, our dedicated team delivers
                                    innovative solutions meticulously tailored for business success</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                            <div class="box text-center p-3">
                                <img src={Analysis} alt="Analysis" className="img-fluid mb-3 AboutIco" />
                                <h3>Analysis</h3>
                                <p>Through rigorous data analysis and insights, we adeptly identify
                                    optimal solutions to efficiently address client challenges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
