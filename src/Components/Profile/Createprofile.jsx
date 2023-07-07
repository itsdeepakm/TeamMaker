import React, { Component ,useState} from 'react';
import { Link} from 'react-router-dom';
import '../Profile/App.css';
import Navbar from '../navbar/navbar';
import axios from 'axios';



const Createprofile = () => {
  
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
  };

  
    return (
      <div>
        <div>
         <Navbar></Navbar>
         <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleInputChange}
            className="form-input"
          />
          <textarea
            name="club"
            placeholder="Club"
            value={formData.club}
            onChange={handleInputChange}
            className="form-textarea"
          ></textarea>
          <input
            type="text"
            name="links"
            placeholder="Links"
            value={formData.links}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleInputChange}
            className="form-input"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
            className="form-textarea"
          ></textarea>
          
          <button type="submit" className="form-button">Submit</button>
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
        
      
    );
  }


export default Createprofile;