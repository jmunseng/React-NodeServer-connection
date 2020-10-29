import React from 'react';

const WorkerRequiement = (props)=> {
    return <div className='worker'>
        <h1 className='title'>{props.title}</h1>
        <ul>
            <li>
                <b>Require Master Workers</b> 
                <input type="radio" name="condition" id='yes' value='yes' onChange={props.onChangeCondition}/> 
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="condition" value='no' id='no' onChange={props.onChangeCondition}/> 
                <label htmlFor="no">No</label>
            </li>
            <li><b>Reward per response</b> <input type="text" name='reward' onChange={props.onChange} /></li>
            <li><b>Number of workers</b> <input type="text" name='number' onChange={props.onChange} /></li>
        </ul>
    </div>
}

export default WorkerRequiement