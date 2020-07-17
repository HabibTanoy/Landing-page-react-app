import React, { Component } from 'react';
import ProgramSection from './programSection';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../title';


class Program extends Component {
    state = { 
        smsImg:'./image/sms.png',
        employeeImg:'./image/employee.png',
        settingImg:'./image/setting.png',
        moneyImg:'./image/money.png',
        smsText:'1.Sign up for Barikoi Developer’s Program',
        employeeText:'2.Get selected',
        settingText:'3.Integrate one of our API’s to your firm’s platform',
        moneyText:'4.Earn 20% of our revenue from the integration'
     }
    render() { 
        return ( 
            <div className="my-5 py-5">
            <Title title={this.props.title}/>
            <Container className="mb-5 pb-5">
                <Row>
                    <Col md={3} className="text-center">
                        <ProgramSection image={this.state.smsImg} text={this.state.smsText} />
                    </Col>
                    <Col md={3} className="text-center">
                    <ProgramSection image={this.state.employeeImg} text={this.state.employeeText} />
                    </Col>
                    <Col md={3} className="text-center">
                    <ProgramSection image={this.state.settingImg} text={this.state.settingText}/>
                    </Col>
                    <Col md={3} className="text-center">
                    <ProgramSection image={this.state.moneyImg} text={this.state.moneyText} />
                    </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
 
export default Program;
