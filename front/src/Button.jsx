import React from 'react';

const Button = (props)=> {
    return <div className='save'>
        <button className='btn btn-success' type={props.type} onClick={props.onClick}>{props.text}</button>
    </div>
}

export default Button