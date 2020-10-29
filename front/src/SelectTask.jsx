import React from 'react';
import RadioButton from './RadioButton'

const SelectTask = (props) => {
    return <div className='select'>
        <h1 className='title'>{props.title}</h1>
        <p>Select Task Type</p>
        <div className='radio'>
            <RadioButton 
                type={props.type}
                name={props.name}
                id='first'
                onChange={props.onChange}
                taskName = 'Choice Task'

            />
            <RadioButton 
                type={props.type}
                name={props.name}
                id='second'
                onChange={props.onChange}
                taskName = 'Decision-Making Task'
            />
            <RadioButton 
                type={props.type}
                name={props.name}
                id='third'
                onChange={props.onChange}
                taskName = 'Sentence-Level Task'
            />
        </div>
    </div>
}

export default SelectTask