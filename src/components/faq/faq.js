import React, { Component } from 'react';
import Title from '../title';
import {Accordion, Card, Button} from 'react-bootstrap';

class Faq extends Component {
    state = { 
        one: {
            title:'1. Am I eligible?',
            body:'If you are a developer or an aspiring developer, you can join the program.'
        },
        two: {
          title:'2. How can I earn money?',
          body:"Register for the program, and integrate our location APIs to your company's app or website.Every month for a year, whatever revenue we earn from this integration, we will share 20% of it with you!"
        },
        three: {
          title:'3. How do I enroll?',
          body:'Just pre-register. We will take a look at your profile and get in touch with you.'
        },
        four: {
          title:'4. Why should I join?',
          body:'To earn an extra money and support Bangladeshi developer community.'
        },
        five: {
          title:'5. What are the benefits of joining the program?',
          body:'Getting into the first public location platform community will provide you connection, training and not to forget, money.'
        }
     }
    render() { 
        return ( 
            <div>
                <Title title={this.props.title} />
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                          <h5 className="mb-0">
                          <a aria-expanded="false">
                          {this.state.one.title}
                          </a>
                          </h5>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>{this.state.one.body}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <h5 className="panel-title">
                          {this.state.two.title}
                          </h5>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>{this.state.two.body}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      <h5>
                          {this.state.three.title}
                          </h5>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>{this.state.three.body}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <h5>
                        {this.state.four.title}
                        </h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>{this.state.four.body}</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    <h5>
                        {this.state.five.title}
                        </h5>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>{this.state.five.body}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
         );
    }
}
 
export default Faq;