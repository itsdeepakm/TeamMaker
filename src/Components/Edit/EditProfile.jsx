import React from 'react'
import './EditProfile.css'
import Navbar from '../navbar/navbar.jsx'
import {Container,Row,Col} from 'react-bootstrap'

function Profile(){
    return(
        <div className="profileInner">
        <Navbar />
            <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" className="profileImg" />
            </div>
            <form method="post" className="profileForm">
                <h3 className="profileH3">Edit your details</h3>
                <Container>
                <Row className="profileRow">
                    <Col md={6}>
                        <div className="form-group">
                            <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" value="" />
                        </div>
                        <div className="form-group">
                        <label className="profileLabel">Gender</label>
                        <input type="radio" className="profileRadio" value="Male" name="gender"/><span className="radioText">Male</span>
                        <input type="radio" className="profileRadio" value="Female" name="gender" /><span className="radioText">Female</span>
                        </div>
                        <div className="form-group">
                            <input type="text" name="txtDomain" className="form-control" placeholder="Your Domain *" value="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="form-group">
                            <textarea name="txtSkill" className="form-control" placeholder="Skills *" ></textarea>
                        </div>
                        <div className="form-group">
                            <textarea name="txtMsg" className="form-control proDescription" placeholder="Description *" ></textarea>
                        </div>
                        <div className="form-group">
                            <textarea name="txtLink" className="form-control" placeholder="Links *" ></textarea>
                        </div>
                    </Col>
                </Row>
                </Container>
                <div>
                    <input type="submit" name="btnSubmit" className="btnContact" value="Edit Details" />
                </div>
            </form>
            </div>
        </div>
    )
}

export default Profile;