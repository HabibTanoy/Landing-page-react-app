import React, { Component } from 'react';
import LogoSection from './logoSection';
import {Container, Row, Col} from 'react-bootstrap';

class About extends Component {
    state = { 
        logoOne:'./logo/chaldal.jpg',
        logoTwo:'./logo/sheba.png',
        logoThree:'./logo/ajkedeal.png',
        logoFour:'./logo/easytrax.png',
        logoFive:'./logo/walletmix.png',
        logoSix:'./logo/styline.png'
     }
    render() { 
        return ( 
            <div id="about" className="my-5 py-5">
                <div className="text-center mb-5 mt-3">
                  <div class="d-inline">
                     <span class="font-weight-bold about_modify">ABOUT</span>
                  </div>
                  <div class="d-inline ml-2">
                     <span class="bari_logo">Bari</span><span class="koi">koi</span>
                  </div>
                </div>
                <div className="px-5 mb-5 about_text">
                    <p>
                    Barikoi is a location data and mapping platform operating in Bangladesh with a mission to enable location
        experience for 160M people of Bangladesh. We provide multiple location, address and mapping solution APIs,
        including - geocoding (search, autocomplete search), Reverse geocoding, nearby(free text, categorized),
        nearby addresses, Rupantor (AI-enabled Address Parser), Barikoi Verify (contact point verification) and a lot
        more. Currently 4 million people use our products every month through our clients in e-commerce, logistics,
        service and public sector. Our valued clients include:
                    </p>
                </div>
                <div className="mb-5">
                    <Container>
                        <Row className="mx-5">
                            <Col md={4}>
                            <LogoSection image={this.state.logoOne} />
                            </Col>
                            <Col md={4}>
                            <LogoSection image={this.state.logoTwo} />
                            </Col>
                            <Col md={4}>
                            <LogoSection image={this.state.logoThree} />
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                    <Row className="mx-5">
                            <Col md={4}>
                            <LogoSection image={this.state.logoFour} />
                            </Col>
                            <Col md={4}>
                            <LogoSection image={this.state.logoFive} />
                            </Col>
                            <Col md={4}>
                            <LogoSection image={this.state.logoSix} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
         );
    }
}
 
export default About;