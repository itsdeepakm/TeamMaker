import React from "react"
import './Select.css'
import Navbar from '../navbar/navbar.jsx'
import Card from './Card.jsx'
import { Button } from "react-bootstrap";
import {Container,Row,Col} from 'react-bootstrap'
import UserAuthContext from "../../context/UserAuthContext"
import { useNavigate } from "react-router";

import { useUserAuth } from "../../context/UserAuthContext";

function Select(){
    const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
//   variant="primary"
    return(
        <div>
            <div className="selectInner">
                <Navbar /><Button className="nav-logout"  onClick={handleLogout}>
          Log out
        </Button>
                <h1 className="selectHeading">Choose your domain and explore</h1>
                <Container className="selectCard">
                    <Row>
                        <Col className="selectColFix">
                            <Card 
                                image="https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg?q=60"
                                heading="Programming"
                                content="If you are into programming and want a teammate for a project or contest, this is the perfect place."
                            />
                        </Col>
                        <Col className="selectColFix">
                            <Card 
                                image="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?cs=srgb&dl=pexels-lucie-liz-3165335.jpg&fm=jpg"
                                heading="Gaming"
                                content="If you are a game struggling to find a good teammate, then you are at the correct place."
                            />
                        </Col>
                        <Col className="selectColFix">
                            <Card 
                                image="https://eduvoice.in/wp-content/uploads/2017/09/research.jpg"
                                heading="Research"
                                content="If you want to amplify the speed ans effetiveness of your research with someones help, here it is."
                            /> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Select