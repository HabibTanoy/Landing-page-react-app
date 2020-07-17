import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class MainNav extends Component {
    state = { 
        logo_link:'https://barikoi.com/',
        program:'the program',
        about:'about us',
        products:'products',
        faqs:'faqs',
        signup:'signup',
        contact:'contact'
     }
    render() { 
        return ( 
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" className="nav_bg">
                    <Navbar.Brand>
                    <a className="logo_link" href={this.state.logo_link}>
                        <div className="pl-5">
                          <span className="nav_logo">Bari</span><span className="koi">koi</span><small className="common_color" >Developers’ Program</small>
                        </div>
                      </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="ml-auto text-uppercase nav-pills" >
                        <Nav.Link href="#program">{this.state.program}</Nav.Link>
                        <Nav.Link href="#benefits">{this.props.title}</Nav.Link> 
                        <Nav.Link href="#about">{this.state.about}</Nav.Link>
                        <Nav.Link href="#products">{this.state.products}</Nav.Link>
                        <Nav.Link href="#faq">{this.state.faqs}</Nav.Link>
                        <Nav.Link href={this.props.link} >{this.state.signup}</Nav.Link> 
                        <Nav.Link href="#contact">{this.state.contact}</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default MainNav;