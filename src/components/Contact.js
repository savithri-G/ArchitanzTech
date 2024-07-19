import React from 'react';
import ContactPage from '../images/ContactPage.mp4';
import './Contact.css';

const Careers = () => {
    return (
        <>
            <div style={{ marginTop: '90px' }}>
                <div className="Contact-container">
                    <video width="100%" autoPlay loop muted>
                        <source src={ContactPage} type="video/mp4" className="cont" />
                    </video>
                    {/* <img src={contactus} alt="ContactPage" className="cont" /> */}
                </div>
            </div>
            <br />
            <br />
            <div className="container mt-5 pt-5">
                <h2 className='mt-2 getTouch'>Get in Touch</h2>
                <div className="row mt-4">
                    <div className="col-md-8">
                        <form>
                            <div className="form-group mt-3 contbox">
                                <input type="text" className="form-control contboxIns" placeholder='Enter Subject' />
                            </div>
                            <div className="form-group mt-3 contbox">
                                <textarea className="form-control no-resize contboxIns"  maxlength="400" rows="5" placeholder='Enter Message'></textarea>
                            </div>
                    
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="form-group mt-3 contbox">
                                        <input type="text" className="form-control contboxIns" placeholder='Your Name' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group mt-3 contbox">
                                        <input type="tel" className="form-control contboxIns" placeholder='Mobile No' />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-3 contbox">
                                <input type="email" className="form-control contboxIns" placeholder='Email' />
                            </div>
                            
                            <button type="submit" className="btn btn-primary form-control mt-5 contBtn">Send</button>
                        </form>
                    </div>

                    <div className="col-md-4">
                        <div className="location mt-3">
                            <p><i class="fa-solid fa-location-dot icone" style={{ fontSize: "25px" }}></i> &nbsp;
                                {/* <strong><img src={offc} alt="offc" className="iconic" /></strong> */}
                                ARCHITANZ TECHNOLOGIES<address className='ms-4'>4th Street, Zacria Colony,<br />
                                    Kodambakkam,
                                    Chennai-600094,India.</address></p>
                            <p><i class="fas fa-phone icone" style={{ fontSize: "22px" }}></i> &nbsp; +(91)-7733881775, <br /> <time className='ms-4'> &nbsp; +(91)-7733881776</time><br />
                                <em className='ms-4'>&nbsp; Mon to Sat 9am to 6pm</em></p>
                            <p><strong className='fas fa-envelope icone' style={{ fontSize: "22px" }}></strong> &nbsp; <a href="mailto:info@architanz.com" style={{textDecoration:"none"}}>info@architanz.com</a><br />
                                <em className='ms-4'>&nbsp; Send us your query anytime!</em></p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='mt-5 pt-5 px-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6725999060227!2d80.22809897381181!3d13.056499813013783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267272dd21be7%3A0x80282cd48c591b17!2sArchitanz%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1721106694437!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{border:"0"}}
                    allowfullscreen=""
                    loading="lazy"
                    title="Architanz Technologies"
                    className='AZMap'
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>

            </div>
        </>
    )
}

export default Careers;
