import React from 'react';

const InputDate = ({...props})=>(
    <label>
        {props.label && <div>{props.label}</div>}
        <input
            type='date'
            {...props}
        />
    </label>
)

export default InputDate;