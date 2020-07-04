import React, { Component } from 'react';
import MainNav from './Navbar';
import Slider from './carousel';
import Program from './program/Program';
import Benefits from './benefits/benefits';
import About from './about/about';
import Product from './products/product';

class Index extends Component {
    state = { 
        program:'the program',
        benefits:'benefits',
        product:'our products'
     }
    render() { 
        return ( 
            <div>
                <MainNav />
                <Slider />
                <Program title={this.state.program}/>
                <br/>
                <br/>
                <Benefits title={this.state.benefits}/>
                <About />
                <Product title={this.state.product}/>
            </div>
         );
    }
}
 
export default Index;