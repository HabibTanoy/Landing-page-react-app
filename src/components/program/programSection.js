import React, { Component } from 'react';

const ProgramSection = props => {
    return(
        <div>
            <img className="image mb-4" src={props.image} />
           <p className="text_edit">{props.text}</p>
        </div>
    );
}

export default ProgramSection;