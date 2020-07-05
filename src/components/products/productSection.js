import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';

const ProductSection = props => {
    return(
        <div>
            <Card className="shadow rounded ml-4" style={{width:"17rem", height:"13rem"}}>
                <Card.Body>
                    <Card.Text>
                        <div className="mt-5 text-center">
                        <h6 className="mb-0">{props.title}</h6>
                        <div className="icon_modify">
                        <i className="fa fa-arrow-circle-down"></i>
                        </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductSection;