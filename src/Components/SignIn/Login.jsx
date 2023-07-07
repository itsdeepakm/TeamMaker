import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
// import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
// import LoginImg from '../../public/images/login.jpg'
// import Imggif from '../../public/images/JXA0.gif'
// import iframe from 'iframe'
import {useNavigate} from 'react-router-dom'
import {  Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";

function Login(){
    
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { logIn,googleSignIn } =useUserAuth();
	const navigate = useNavigate();
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  setError("");
	  try {
		await logIn(email, password);
		navigate("/select");
	  } catch (err) {
		setError(err.message);
	  }
	};
  
	const handleGoogleSignIn = async (e) => {
	  e.preventDefault();
	  try {
		await googleSignIn();
		navigate("/select");
	  } catch (error) {
		console.log(error.message);
	  }
	};

    return(
		<div className="bodydiv">
		<div id="stars"></div>
         <div id="stars2"></div>
        <div id="stars3"></div>
		<div class="containerlogin">
			<div className="gifdiv"><img src="https://i.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.webp" alt="" className="gif"></img> </div>
			
			<span className="titleteam"><h1 className="titleTeam">𝑻𝒆𝒂𝒎𝑴𝒂𝒌𝒆𝒓</h1></span>
		<div class="img-div"></div>
		{error && <Alert variant="danger">{error}</Alert>}
		<div class="login-div">
		
			<div class="login-box">
			
				<form onSubmit={handleSubmit}action="" class="login-form">
				
					<div class="input-div">
						{/* <i class="fa-solid fa-user"></i> */}
						<input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} ></input>
					</div>
					<div class="input-div">	
						{/* <i class="fa-solid fa-key"></i> */}
						<input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}></input>
					</div>
					<input type="submit" value="Login" id="login-btn"></input>

					
                 <div>
                     <GoogleButton
                           className="g-btn"
                        type="dark"
                          onClick={handleGoogleSignIn}
                        />
                           </div>
					{/* <p className="orp">OR</p> */}
					<button className="linksign" id="register-btn"><span class="bkn"><Link to="/Register">Sign up</Link></span></button> 
						
						
						
				</form>
			</div>
				{/* <div class="newuser"><p>New Here?</p><a href=" ">Sign Up</a></div> */}
		</div>
	</div>
	
	</div>	
    );
}

export default Login