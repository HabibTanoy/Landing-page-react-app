import React, { Component } from 'react';

const Title = props => {
    return(
        <div className="mt-3 mb-5 pb-5">
            <h2 className="text-center text-uppercase common_colorTwo mb-4">{props.title}</h2>
        </div>
    );
}

export default Title;