import React, { Component } from 'react';

const LogoSection = props => {
    return(
        <div className="text-center">
            <img src={props.image} width="50%" height="50%" />
        </div>
    );
}

export default LogoSection;