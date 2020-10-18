import React from 'react';

const Select = ({...props})=>(
    <label htmlFor={props.option}>
        {props.title && <div>{props.title}</div>}
        <input
            type="radio"
            id={props.option}
            name={props.key}
            value={props.option}
        />
        {props.label}
    </label>
);


export default Select;