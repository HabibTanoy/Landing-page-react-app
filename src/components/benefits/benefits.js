import React, { Component } from 'react';
import BenefitSection from './benefitSection';
import Title from '../title';

class Benefits extends Component {
    state = { 
        benefit_title: {
            tier:'Tier',
            criteria:'Criteria',
            benefits:'Benefits'
        },
        benefit_bodyOne: {
            tier:'Tier - 1',
            criteria:'Pre-register for the program',
            benefits:'1. Credit of 1M calls for 12 months on Barikoi platform 2. Exclusive invites to invite-only hackathons'
        },
        benefit_bodyTwo: {
            tier:'Tier - 2',
            criteria:'Integrate our API',
            benefits:'20% Revenue Sharing'
        },
        benefit_bodyThree: {
            tier:'Tier - 3',
            criteria:'Refer 10 new developers to register for the program',
            benefits:'Exclusive Barikoi Merchandise'
        },
        benefit_bodyFour: {
            tier:'Tier - 4',
            criteria:'At least 5 of the references integrate our API',
            benefits:'Revenue sharing upgrade to 25%'
        }
    }
    render() { 
        return ( 
            <div className="mt-5 pt-5">
                <Title title={this.props.title} />
                <div className="benefit_title">
                <BenefitSection title={this.state.benefit_title.tier}  textOne={this.state.benefit_title.criteria} textTwo={this.state.benefit_title.benefits}/>
                </div>
                <div className="benefit_details">
                <BenefitSection title={this.state.benefit_bodyOne.tier}  textOne={this.state.benefit_bodyOne.criteria} textTwo={this.state.benefit_bodyOne.benefits}/>
                <BenefitSection title={this.state.benefit_bodyTwo.tier}  textOne={this.state.benefit_bodyTwo.criteria} textTwo={this.state.benefit_bodyTwo.benefits}/>
                <BenefitSection title={this.state.benefit_bodyThree.tier}  textOne={this.state.benefit_bodyThree.criteria} textTwo={this.state.benefit_bodyThree.benefits}/>
                <BenefitSection title={this.state.benefit_bodyFour.tier}  textOne={this.state.benefit_bodyFour.criteria} textTwo={this.state.benefit_bodyFour.benefits}/>
                </div>
            </div>
         );
    }
}
 
export default Benefits;
