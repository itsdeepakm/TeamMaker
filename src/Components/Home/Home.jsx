import React from "react";
import './Home.css'

import Navbar from '../navbar/navbar.jsx'
import homeImg from '../../public/images/vsdsdv.jpg'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

function Home(){
    return (
        <div>
            <div className="homeInner">
                <Navbar />
                <Container>
                    <Row>
                        <Col className="homeCol" sm={6}>
                            <h1 className="homeHeading"><Rotate left top cascade>TeamWork</Rotate> makes the <Rotate left bottom cascade> Dreamwork</Rotate></h1>
                            <p className="homeDescription">Find your perfect teammates with similar interests and work together to achieve your goals.</p>
                       <button className="links linkSign"><span class="front"><Link to="/login">Sign In</Link></span></button>    
                            {/* <button className="links linkRegister"><span class="front">Register</span></button> */}
                        </Col>
                        <Col className="homeCol" sm={6}>
                           <span className="homespan"> <Slide right> <img src={homeImg} alt="homeImage" className="homeImg"/> </Slide></span> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home