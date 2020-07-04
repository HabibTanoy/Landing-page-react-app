import React, { Component } from 'react';

const Title = props => {
    return(
        <div>
            <h2 className="text-center text-uppercase common_colorTwo mb-5">{props.title}</h2>
        </div>
    );
}

export default Title;