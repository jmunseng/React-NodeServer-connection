import React from 'react';

const RadioButton = (props) => {
    return <div>
        <input type={props.type} name={props.name} id={props.id} onChange={props.onChange} value={props.taskName} checked={props.checked} /> 
        <label htmlFor={props.id}>{props.taskName}</label>
    </div>
}

export default RadioButton