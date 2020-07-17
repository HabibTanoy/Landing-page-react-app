import React, { Component } from 'react';
import Title from '../title';
import {Accordion} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import FaqSection from './faqSection';

class Faq extends Component {
    state = { 
        one: {
            title:'1. Am I eligible?',
            body:'If you are a developer or an aspiring developer, you can join the program.',
            eKey:0
        },
        two: {
          title:'2. How can I earn money?',
          body:"Register for the program, and integrate our location APIs to your company's app or website.Every month for a year, whatever revenue we earn from this integration, we will share 20% of it with you!",
          eKey:1
        },
        three: {
          title:'3. How do I enroll?',
          body:'Just pre-register. We will take a look at your profile and get in touch with you.',
          eKey:2
        },
        four: {
          title:'4. Why should I join?',
          body:'To earn an extra money and support Bangladeshi developer community.',
          eKey:3
        },
        five: {
          title:'5. What are the benefits of joining the program?',
          body:'Getting into the first public location platform community will provide you connection, training and not to forget, money.',
          eKey:4
        },
     }
     
    render() { 
        return ( 
            <div>
                <Title title={this.props.title} />
                <Accordion>
                   <FaqSection title={this.state.one.title} body={this.state.one.body} eKey={this.state.one.eKey}/>
                   <FaqSection title={this.state.two.title} body={this.state.two.body} eKey={this.state.two.eKey}/>
                   <FaqSection title={this.state.three.title} body={this.state.three.body} eKey={this.state.three.eKey}/>
                   <FaqSection title={this.state.four.title} body={this.state.four.body} eKey={this.state.four.eKey}/>
                   <FaqSection title={this.state.five.title} body={this.state.five.body} eKey={this.state.five.eKey}/>
                </Accordion>
              
           </div>   
        );
}
}
 
export default Faq;