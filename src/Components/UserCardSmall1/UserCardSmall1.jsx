import React from 'react'
import './UserCardSmall1.css'
import {Container,Row,Col} from 'react-bootstrap'
import photo from '../../public/images/photo.jpeg'

function UserCardSmall(){
    return(
        <div className="UserCardSmallInner">
            <Container>
            <Row>
                <Col sm={6} md={4} lg={3}>
                <div className="our-team">
                    <div className="picture">
                        <img className="img-fluid" src={photo} />
                    </div>
                    <div className="team-content">
                        <h3 className="name">Hriday Garg</h3>
                        <h4 className="title">Web Developer</h4>
                    </div>
                    <a href="" className="USMLink">know more...</a>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default UserCardSmall