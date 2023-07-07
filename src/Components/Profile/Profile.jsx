import React,{useState} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Profile.css';
import {Link} from 'react-router-dom'

import Input from '../../Components/FormElements/Input';
import Button from '../../Components/FormElements/Button';
import ErrorModal from '../../Components/FormElements/ErrorModal';
import LoadingSpinner from '../../Components/FormElements/LoadingSpinner';

import { useForm } from '../../Components/hooks/form-hook';
import { useHttpClient } from '../../Components/hooks/http-hook';
import { AuthContext } from '../../context/auth-context';

import Navbar from '../navbar/navbar.jsx'
import {Container,Row,Col} from 'react-bootstrap'
// import { db } from "../config/config";



function Profile(){
   
    const [formData,setFormData] =useState({
        name: '',
        branch:'',
        club:'',
        links:'',
        skills:'',
        year:'',
        description:'',
       
      });

      const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
          
      };   
  

 

    const handleSubmit = (event) => {
      event.preventDefault();
      
    axios
      .post('http://localhost:4000/profiles', formData)
      .then((response) => {
        console.log('Form submitted successfully');
        // Do something with the response if needed
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });

    //   history.push('/showprofile');
  };
   
      
    

    return(
        <div className="profileInner">
        <Navbar />
            <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" className="profileImg" />
            </div>
          
            <form action="" method="" className="profileForm" onSubmit={handleSubmit}  >
           
                <h3 className="profileH3">Enter your details</h3>
                <Container classNmae="profiledetail">
                <Row className="profileRow">
                    <Col md={6}>
                        <div className="form-group">
                        <input  type="text" name="name"  className="form-control" placeholder="Your Name" value={formData.name}
            onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            {/* <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />value={input.name} value={input.branch} onChange={handleChange} onChange={handleChange} onChange={handleChange} value={input.club} onChange={handleChange}  value={input.links} onChange={handleChange} value={input.skills}*/}
                            <select name="branch"  className="branchinput" placeholder='branch'value={formData.branch}
            onChange={handleInputChange}>
                                   <option value="CSE">CSE</option>
                                   <option value="IT" >IT</option>
                                   <option value="ECE">ECE</option>
                                   <option value="EEE">EEE</option>
                                   <option value="MECH" >MECH</option>
                                   <option value="CIVIL">CIVIL</option>
                                   <option value="CHEM">CHEM</option>
                                   <option value="PROD" >PROD</option>
                                   <option value="PROD" selected>None</option>
                                   
                            </select>
                              </div>

                    
                        <div className="form-group">
                            <input  type="text" name="club" className="form-control" placeholder="Clubs"  value={formData.club}
            onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                         <textarea  name="links" className="form-control" placeholder="Links *"  value={formData.links}
            onChange={handleInputChange}></textarea>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="form-group">
                            <textarea  name="skills"  className="form-control" placeholder="Skills *"value={formData.skills}
            onChange={handleInputChange} ></textarea>
                        </div>
                        <div className="form-group">
                            {/* <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />onChange={handleChange} value={input.year} onChange={handleChange} value={input.description} */}
                            <select  name="year"  className="branchinput" placeholder='Year'value={formData.year}
            onChange={handleInputChange}>
                                   <option value="K19">K19</option>
                                   <option value="K20" selected>K20</option>
                                   <option value="K21">K21</option>  
                                   <option value="PROD" selected>None</option>    
                            </select>
                              </div>
                        <div className="form-group">
                            <textarea  name="description" className="form-control proDescription" placeholder="Describe yourself *"value={formData.description}
            onChange={handleInputChange} ></textarea>
                        </div>
                    </Col>
                </Row>
                </Container>
              
                 <input  type="submit" name="btnSubmit" className="btnContact" value="Submit" />
                 <button className="links linkSign"><span class="front"><Link to="/showprofile">show profile</Link></span></button> 
                    {/* <Button type="submit" className="btnContact" > 
                  
                 
                   </Button> */}
              
            </form>
            </div>
            <div>
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

 export default Profile;