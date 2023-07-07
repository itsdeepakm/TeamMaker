import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import DeepakImg from "../../public/images/deepak.jpeg";
import HridayImg from "../../public/images/hriday.jpeg";
import TeamImg from "../../public/images/teamaker.jpg";
import ReactjsImg from "../../public/images/reactjs.svg";
import MongodbImg from "../../public/images/mongodb.png";
import FirebaseImg from "../../public/images/firebase.png";
import ExpressImg from "../../public/images/express.png";
import NodeImg from "../../public/images/nodejs.svg";
import './About.css'

import Navbar from "../navbar/navbar.jsx";
function About(){

    return(
        <div className="Aboutdiv">
            <Navbar/>
            <Zoom right>
            <div className="Teammakerdiv">
                <h1 className="h1hriday"> TeamMaker</h1>
                 <img src={TeamImg} alt="" className="teamImg"></img>
                 <div className="detaildiv"> <p className="phriday">
                    <br></br>
                    <br></br>
                    Teammaker is a website.where people can create their profile<br></br> and get connect with each other and people with
                  same skills can collabrate with each other .
                  <br></br>
                  <br></br>
                  <span className="spanmern">Technologies used:-</span>
                  <div><img src={ReactjsImg} alt="" className="ReactjsImg"></img> 
                  <img src={MongodbImg} alt="" className="ReactjsImg"></img>
                  <img src={NodeImg} alt="" className="ReactjsImg"></img>
                  <img src={ExpressImg} alt="" className="ReactjsImg"></img>
                  <img src={FirebaseImg} alt="" className="ReactjsImg"></img>
                  
                  </div>
                  </p></div>
             </div>
            </Zoom>
            <div><span><h1 className="h1team">OUR TEAM</h1></span></div>
             <Fade left>
            <div className="Deepakdiv">
                <img src={DeepakImg} className="DeepakImg" placeholder="" alt="no internet"></img>
                <div className="detaildiv"><div className="Hridaydetails"><h1 className="h1hriday"> Deepak Marandi</h1>
                     <p className="phriday">I am a great learner. who want to acquire that much knowledge<br></br> so that
                 i can turn my ideas into reality, i am a MernStack developer,Apart from that i love to watch movies and series. </p>
                 <div className="socialicons">
                 <ul>
                           <li><a href="https://github.com/itsdeepakm"><i class="fab fa-github" aria-hidden="true"></i> </a></li>
                             <li><a href="https://twitter.com/Itsdeepakm?t=Kg9Gi6nQ-pZL3khdbFSRwQ&s=08"><i class="fab fa-twitter" aria-hidden="true"></i> </a></li>
                          <li><a href=" "><i class="fab fa-google" aria-hidden="true"></i> </a></li>
                               <li><a href="https://www.linkedin.com/in/deepak-marandi-67a051241/"><i class="fab fa-linkedin" aria-hidden="true"></i> </a></li>
                             <li><a href="https://instagram.com/deepaklewiskumar.19?igshid=YmMyMTA2M2Y="><i class="fab fa-instagram" aria-hidden="true"></i> </a></li>
                        </ul>
                        </div>
                 </div>
                 </div>
                
            </div>
            </Fade>
            <Fade right>
            <div className="hridaydiv">
                <img src={HridayImg} className="HridayImg" placeholder="" alt="no internet"></img>
                <div className="detaildiv">
                <div className="Hridaydetails"><h1 className="h1hriday">Hriday Garg</h1>
                     <p className="phriday">I am an avid learner who loves problem solving.<br></br> I do competitive programming and web development.
                     <br></br> Apart from that , I love to play and watch football.</p>
                 <div className="socialicons">
                 <ul>
                           <li><a href="https://github.com/Mercury1508"><i class="fab fa-github" aria-hidden="true"></i> </a></li>
                             <li><a href=" "><i class="fab fa-twitter" aria-hidden="true"></i> </a></li>
                            <li><a href=" "><i class="fab fa-google" aria-hidden="true"></i> </a></li>
                               <li><a href="https://www.linkedin.com/in/hriday-garg-654990194/"><i class="fab fa-linkedin" aria-hidden="true"></i> </a></li>
                             <li><a href="https://www.instagram.com/garg_hriday/"><i class="fab fa-instagram" aria-hidden="true"></i> </a></li>
                        </ul>
                        </div>
                 </div>
                </div>
               
              
            </div>
           </Fade>

           
           <div className="wavediv">
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
export default About;