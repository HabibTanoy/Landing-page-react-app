import React, { Component } from 'react';
import {Accordion, Card, Button} from 'react-bootstrap';

// const FaqSection = props => {

//     return(
//         <div>
//             <Card>
//                     <Accordion.Toggle as={Card.Header} eventKey={props.eKey}>
//                         {props.title}
//                        <span className="arrow_edit">
//                        <i class="fa fa-angle-down" aria-hidden="true"></i>
//                        </span>
//                     </Accordion.Toggle>
//                     <Accordion.Collapse eventKey={props.eKey} aria-expanded="false">
//                     <Card.Body>{props.body}</Card.Body>
//                     </Accordion.Collapse>
//                     </Card>
//         </div>
//     )
// }

// export default FaqSection;

class FaqSection extends Component {
    state = {
        aria:false
    }

    change = () => {
        this.setState({
            aria:true
        })
    }
    render() { 
        return ( 
            <div>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.eKey} onClick={this.change}>
                        {this.props.title}
                       <span className="arrow_edit" >
                       <i class="fa fa-angle-down"  aria-expanded={this.state.aria} aria-hidden="true"></i>
                       </span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.props.eKey}>
                    <Card.Body>{this.props.body}</Card.Body>
                    </Accordion.Collapse>
                    </Card>
            </div>
         );
    }
}
 
export default FaqSection;