import React from 'react';

const SettingTask = (props)=> {
    return <div className='setting'>
        <p>{props.content}</p>
        <textarea onChange={props.onChange} value={props.value} name={props.type} placeholder='Write content here' rows="4" cols="50"> </textarea>
    </div>
}

export default SettingTask