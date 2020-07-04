import React, { Component } from 'react';
import MainNav from './Navbar';
import Slider from './carousel';
import { Container, Row, Col } from 'react-bootstrap';

class Index extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <MainNav />
                <Slider />
                <Program>
                <Container>
                <h2 className="text-center text-uppercase">the program</h2>
                    <Row>
                        <Col md={3}>
                           <ProgramSection />
                        </Col>
                        <Col md={3}>sm=4</Col>
                        <Col md={3}>sm=4</Col>
                        <Col md={3}>sm=4</Col>
                    </Row>
            </Container>
                </Program>
            </div>
         );
    }
}
 
export default Index;