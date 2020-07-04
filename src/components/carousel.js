import React, { Component } from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';

class Slider extends Component {
    state = { 
        image:'./A.png'
     }
    render() {
        return ( 
            <div>
                <Carousel>
  <Carousel.Item> 
    <img
      className="d-block w-100" style={{height:"620px"}}
      src={this.state.image}
      alt="First slide"
    />
    <Carousel.Caption >
    <Row>
        <Col md={6}></Col>
        <Col md={6}>
        <h2 className="text-left">Welcome to <span class="common_colorTwo"> Barikoi Developers’ Program</span>, where you can get a chance to earn with the <span class="common_colorTwo">country’s first location data platform!</span> </h2>
        </Col>
  </Row>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item> 
    <img
      className="d-block w-100" style={{height:"620px"}}
      src={this.state.image}
      alt="Second slide"
    />
    <Carousel.Caption >
    <Row>
        <Col md={6}></Col>
        <Col md={6}>
        <h2 class="text-left">Simply integrate one of our APIs for your firm’s location and mapping related needs, and <span class="common_colorTwo">earn a flat 20% of our revenues from the integration</span></h2>
        </Col>
  </Row>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item> 
    <img
      className="d-block w-100" style={{height:"620px"}}
      src={this.state.image}
      alt="Third slide"
    />
    <Carousel.Caption >
    <Row>
        <Col md={6}></Col>
        <Col md={6}>
        <h2 class="text-left"> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUpqFKqDcrypnwqdGrzBHvXk9dmaMH9TRf63mLkAlkv30fTw/viewform" style={{textDecoration:"none"}} ><span class="common_colorTwo">Sign Up now</span></a> , and join the revolution to enable a better location experience <span class="common_colorTwo">For Bangladesh and Beyond!</span></h2>
        </Col>
  </Row>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        
            </div>
         );
    }
}
 
export default Slider;
