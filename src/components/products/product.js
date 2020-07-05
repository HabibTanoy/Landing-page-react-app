import React, { Component } from 'react';
import Title from '../title';
import ProductSection from './productSection';
import {Container, Row, Col} from 'react-bootstrap';

class Product extends Component {
    state = { 
        card_title:{
            titleOne:'Search',
            titleTwo:'Nearby',
            titleThree:'Reverse Geocode',
            titleFour:'Rupantor',
            titleFive:'Verify',
            titleSix:'Barikoi 360'
        }

     }
    render() { 
        return ( 
            <div className="mb-5">
                <Title  title={this.props.title} />
                <Container className="mb-5">
                    <Row>
                        <Col md={4} className="text-center">
                            <ProductSection title={this.state.card_title.titleOne}/>
                        </Col>
                        <Col md={4} className="text-center">
                        <ProductSection title={this.state.card_title.titleTwo}/>
                        </Col>
                        <Col md={4} className="text-center">
                        <ProductSection title={this.state.card_title.titleThree}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={4} className="text-center">
                        <ProductSection  title={this.state.card_title.titleFour}/>
                        </Col>
                        <Col md={4} className="text-center">
                        <ProductSection title={this.state.card_title.titleFive}/>
                        </Col>
                        <Col md={4} className="text-center">
                        <ProductSection title={this.state.card_title.titleSix}/>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Product;