import React, { Component } from 'react';
import Title from '../title';
import {Container, Row, Col} from 'react-bootstrap';

class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Title title={this.props.title} />
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Product;