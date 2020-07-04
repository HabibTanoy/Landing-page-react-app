import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BenefitSection = props => {
    return(
        <div>
            <Container>
                <Row className="mb-4">
                    <Col md={2}>
                        <div className="text-center">{props.title}</div>
                    </Col>
                    <Col md={5}>
                        <div className="text-center">{props.textOne}</div>
                    </Col>
                    <Col md={5}>
                       <div className="text-center">{props.textTwo}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BenefitSection;