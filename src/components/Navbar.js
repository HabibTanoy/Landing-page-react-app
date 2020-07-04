import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class MainNav extends Component {
    state = { 
        logo_link:'https://barikoi.com/',
        signup_link:'https://docs.google.com/forms/d/e/1FAIpQLSfUpqFKqDcrypnwqdGrzBHvXk9dmaMH9TRf63mLkAlkv30fTw/viewform'
     }
    render() { 
        return ( 
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" className="nav_bg">
                    <Navbar.Brand href="#home">
                    <a className="logo_link" href={this.state.logo_link}>
                        <div className="pl-5">
                          <span className="nav_logo">Bari</span><span className="koi">koi</span><small className="common_color" >Developers’ Program</small>
                        </div>
                      </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="ml-auto text-uppercase">
                        <Nav.Link href="#program">the program</Nav.Link>
                        <Nav.Link href="#benefits">benefits</Nav.Link> 
                        <Nav.Link href="#about">about us</Nav.Link>
                        <Nav.Link href="#products">products</Nav.Link>
                        <Nav.Link href="#faq">faqs</Nav.Link>
                        <Nav.Link href={this.state.signup_link} >signup</Nav.Link> 
                        <Nav.Link href="#contact">contact</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default MainNav;