import React from "react"
import "./UserCardBig.css"
import photo from '../../public/images/photo.jpeg'

function UserCardBig(){
    return(
        <div className="UCBinner">
            <div class="container mt-5 UCBfill">    
            <div class="row d-flex justify-content-center">               
                <div class="col-md-7">                    
                    <div class="card UCBcard p-3 py-4">                       
                        <div class="text-center">
                            <img src={photo} width="120" class="rounded-circle" />
                        </div>                        
                        <div class="text-center mt-3">
                            <h3 class="mt-2 mb-0">Hriday Garg</h3>
                            <span>Web Developer</span>  
                            <p className="detailUCB">-1234567890- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -abc@gmail.com-</p>                          
                            <div class="px-4 mt-1">
                                <p class="descUCB">I am an avid learner who loves problem solving. I do competitive programming and web development . Apart from that , I love to play and watch football. </p>                            
                                <p class="skillUCB">Skills - Competitive programming (C/C++) , Web Development (MERN)</p>
                                <p class="linkUCB">
                                <a href="https://github.com/Mercury1508" target="_blank">https://github.com/Mercury1508</a><br />
                                <a href="https://codeforces.com/profile/hriday..garg" target="_blank">https://codeforces.com/profile/hriday..garg</a>
                                </p>
                            </div>                                               
                            <div class="buttons">
                                <button class="btn btn-outline-primary px-4">Go Back</button>
                                <button class="btn btn-primary px-4 ms-3">Message</button>
                            </div>                                                        
                        </div>                                                
                    </div>                    
                </div>                
            </div>    
        </div> 
        </div>
    );
};

export default UserCardBig