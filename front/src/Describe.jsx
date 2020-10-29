import React from 'react';

const Describe = (props)=> {
    return <div className='describe'>
        <h1 className='title'>{props.headerTitle}</h1>
        <ul>
            <li><b>Title</b> <input name='title' type={props.type} onChange={props.onChange} placeholder='Enter task title' /></li>
            <li><b>Description</b> <input name='describe' type={props.type} onChange={props.onChange} placeholder='Enter task description' /></li>
            <li><b>Expiry Date</b> <input name='date' type={props.type} onChange={props.onChange} placeholder='' /></li>
        </ul>

    </div>
}

export default Describe