import React from 'react';

const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>   
            <p>Age: {props.edad}</p>
            <p>Hair color: {props.cabello}</p>
        </div>
    );
}

export default PersonCard;
