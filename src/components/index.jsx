import React, { Component } from 'react';
import MainNav from './Navbar';
import Slider from './carousel';
import Program from './program/Program';
import Benefits from './benefits/benefits';
import About from './about/about';
import Product from './products/product';
import Faq from './faq/faq';
import { Button } from 'react-bootstrap'

class Index extends Component {
    state = { 
        program:'the program',
        benefits:'benefits',
        product:'our products',
        faq:'frequently asked questions (faqs)',
        signupLink:'https://docs.google.com/forms/d/e/1FAIpQLSfUpqFKqDcrypnwqdGrzBHvXk9dmaMH9TRf63mLkAlkv30fTw/viewform'
     }
    render() { 
        return ( 
            <div>
                <MainNav link={this.state.signupLink} title={this.state.benefits}/>
                <Slider />
                <div id="program">
                <Program title={this.state.program}/>
                </div>
                <div id="benefits">
                <Benefits title={this.state.benefits}/>
                </div>
                <div id="about">
                <About/>
                </div>
                <div id="products">
                <Product title={this.state.product}/>
                </div>
                <div id="faq">
                <Faq title={this.state.faq}/>
                </div>
                <div className="my-5">
                    <h3 className="font-weight-bold text-center">Join <span class="bari_logo">Bari</span><span class="koi">koi</span> Developers’ Program and start earning now!</h3>
                </div>
               <div className="text-center my-5">
                   <Button variant="link" className="font-weight-bold" id="is-btn" href={this.state.signupLink}>Sign Up</Button>
               </div>
            </div>
         );
    }
}
 
export default Index;