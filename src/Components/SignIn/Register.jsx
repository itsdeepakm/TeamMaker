
import './Register.css'
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'
// import logoImg from '../../public/images/logo.png'
import { useUserAuth } from "../../context/UserAuthContext";
import { Alert } from "react-bootstrap";

function Register(){
    const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
    const [error, setError] = useState("");
	const { signUp } = useUserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
		  await signUp(email, password);
		  navigate("/login");
		} catch (err) {
		  setError(err.message);
		}
	  };

    return(
		<div className="bodydiv">
		<div id="stars"></div>
         <div id="stars2"></div>
        <div id="stars3"></div>
		<div class="containerlogin">
		<div className="gifdiv"><img src="https://i.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.webp" alt="" className="gif"></img> </div>
			
		<div class="img-div"></div>
		<span className="titleteam"><h1 className="titleTeam">𝑻𝒆𝒂𝒎𝑴𝒂𝒌𝒆𝒓</h1></span>
		{error && <Alert variant="danger">{error}</Alert>}
		<div class="login-div">
			<div class="login-box">
				
				{/* <h1 class="l-txt">Login</h1> */}
				
				<form onSubmit={handleSubmit} action="" class="login-form">
				
					<div class="input-div">
						{/* <i class="fa-solid fa-user"></i> */}
					
						<input type="text" placeholder="Name"></input>
					</div>
					<div class="input-div">
						{/* <i class="fa-solid fa-user"></i> */}
					
						<input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
					</div>
					<div class="input-div">	
						{/* <i class="fa-solid fa-key"></i> */}
						<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
						
					</div>
					<div class="input-div">	
						{/* <i class="fa-solid fa-key"></i> */}
						<input type="password" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)}></input>
						
					</div>
					
				
					{/* <p className="orp">OR</p> */}
					<input type="submit" value="Signup" id="register-btn"></input>
						
						
						
				</form>
			</div>
				{/* <div class="newuser"><p>New Here?</p><a href=" ">Sign Up</a></div> */}
		</div>
	</div>
	
	</div>
        );
}

export default Register;