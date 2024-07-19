import React from 'react';
import CareerPage from '../images/CareerPage.mp4';
import './Careers.css'

const Careers = () => {
    return (
        <>
            <div style={{ marginTop: '90px' }}>
                <div className="Careers-container">
                <video width="100%" autoPlay loop muted>
                  <source src={CareerPage} type="video/mp4" className="car" />
                 </video>
                    {/* <img src={career} alt="CareerPage" className="car" /> */}
                </div>
            </div>

            <div className="container mt-5">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title text-center">We're Hiring!</h3>
                        <p className="card-text text-center">We are hiring professionals with 1 to 10 years of experience in:</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Software Development</li>
                            <li className="list-group-item">Testing</li>
                            <li className="list-group-item">Network and Server Infrastructure</li>
                        </ul>
                        <p className="card-text mt-4 text-center">Send your applications along with Current CTC, Expected CTC, and Notice Period to:</p>
                        <h5 className="card-text text-center"><a href="mailto:Career@architanz.com" style={{textDecoration:"none",color:"rgb(26, 101, 241)"}}>Career@architanz.com</a></h5>
                    </div>
                </div>
            </div><br/><br/>
            <div className="career-form-container mt-5 pt-5 carCont">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Career Form</h3>
                <form>
                  <div className="form-group carForm">
                    <input type="text" className="form-control" id="name" placeholder="name" />
                  </div>
                  <div className="form-group carForm">
                    <input type="email" className="form-control" id="email" placeholder="email" />
                  </div>
                  <div className="form-group carForm">
                    <input type="tel" className="form-control" id="number" placeholder='Mobile No'  />
                  </div>
                  <div className="form-group carForm">
                    <input type="text" className="form-control" id="phone" placeholder="Qualification" />
                  </div>
                  <div className="form-group carForm">
                    {/* <input type="text" className="form-control" id="phone" placeholder="Designation" /> */}
                    <select  className="form-control sele" id="phone" >
                        <option value="" selected disabled hidden>Position for Applying</option>
                        <option>Software Development</option>
                        <option>Testing</option>
                        <option>Network And Server Infrastructure</option>
                     
                    </select>
                  </div>
             
                  <div className="form-group carForm">
                    <input type="text" className="form-control" id="Experience" name="Exp" list="Exp" 
                    placeholder="Number of years experience" />
                    <datalist id="Exp">
                    <option value="<1">Less than a year</option>
                      <option value="1">1 year</option>
                      <option value="2">2 years</option>
                      <option value="3">3 years</option>
                      <option value="4">4 years</option>
                      <option value="5+">5+ years</option>
                    </datalist>
                  </div>
                  
                  <div className="form-group carForm">
                    
                    <input type="file" className="form-control" id="resume" />
                  </div>
                  <div className="form-group carForm">
                    <textarea className="form-control noResize" maxlength="250" id="comments" rows="3" placeholder="comments"></textarea>
                  </div>
                  <div className="form-group carForm">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Careers;
