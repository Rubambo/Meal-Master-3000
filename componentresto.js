import React from 'react';
import './component.css';

function Rest(props) {
    return (
        <div className = 'bill-split'>
            <div>{props.distance}</div>
            <div className = 'bill-split__description'>
                <h2>{props.name}</h2>
                <div className = 'bill-split__price'>{props.timing}</div>
            </div>
        </div>
        );
}

export default Rest;