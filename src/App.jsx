import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Login from './Components/SignIn/Login.jsx';
import Register from './Components/SignIn/Register.jsx';
import Profile from './Components/Profile/Profile.jsx';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Select from './Components/Select/Select.jsx';
import ProtectedRoute from "./Components/SignIn/ProtectedRoute";
import About from "./Components/About/About.jsx";
import Createprofile from "./Components/Profile/Createprofile"
import ShowProfile from "./Components/ShowProfile/ShowProfile"
import Form from"./Components/Profile/form.jsx"
function App(){
    
    return(<>
     <UserAuthContextProvider>
        
    <Router>
    <Routes>
     <Route path="/" exact element={<Home />} />
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
            <Route path="/profile" exact element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/about" exact element={<About />} />
            <Route path="/newprofile" exact element={<Createprofile/>} />
            <Route path="/showprofile" exact element={<ShowProfile/>} />
            <Route path="/form" exact element={<Profile/>} />
            <Route path="/select" exact element={<ProtectedRoute><Select /></ProtectedRoute>} />
            
           
			
    </Routes>
    </Router>
    </UserAuthContextProvider>
    </>
    )
}

export default App