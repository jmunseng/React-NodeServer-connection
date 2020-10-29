import React, {useState} from 'react';

import SelectTask from './SelectTask'
import Describe from './Describe'
import SettingTask from './SettingTask'
import WorkerRequiement from './WorkerRequiement'
import Button from './Button'
import './Main.css'


const NewRequesterTask = ()=> {


    // select task radio button
    const [selected,setSelected] = useState('')
    const taskChange = (event) => {
        const task = event.target.value
        setSelected(task)

    }

    // Describe up your task 
    const [describeContent, setDescribeContent] = useState({
        title:'',
        describe:'',
        date:''
    })

    const DescribeHandleChange = (event)=>{
        const {name, value} = event.target
        setDescribeContent ((preValue)=>{  
            return {
              ...preValue,
              [name]: value
            }
          })
    }



    // Setting up your task
    const [conditionContent, setConditionContent] = useState('')
    const conditionContentChange = (event) => {
        const content= event.target.value
        setConditionContent(content)
    }

    // Worker Requirement
    const [workerSelect, setWorkerSelect] = useState('')
    const conditionChange = (event)=>{
        const condition = event.target.value
        setWorkerSelect(condition)
    }

    const [workerContent, setWorkerContent] = useState({
         reward:'',
         number:''
        
    })
    const WorkerHandleChange = (event) =>{
        const {name, value} = event.target
        setWorkerContent ((preValue) =>{
            return {
                ...preValue,
                [name]:value
            }
        })
    }

    //Submit button Action
    const saveContent = ()=>{
        fetch('http://localhost:3000/submit', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                task: selected,
                title: describeContent.title,
                describe:describeContent.describe,
                expireDate: describeContent.date,
                content:conditionContent,
                condition:workerSelect,
                reward:workerContent.reward,
                number:workerContent.number
  
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Error:" + err)
        })
    }



    return <div>
        <SelectTask 
            title = 'New Requester Task'
            type = 'radio'
            name = 'taskType'
            onChange = {taskChange}
        />
        
        <Describe 
            headerTitle='Describe Your Task to Workers'
            type = 'text'
            onChange= {DescribeHandleChange}

        />

        <h1 className='title'>Setting up Your Task</h1>
        {/* <SettingUpTask /> */}
        {(() => {
            switch (selected){
                case 'Choice Task' : return <SettingTask 
                    content = 'Choice Task Selected'
                    onChange={conditionContentChange}
                    value={conditionContent} 
                    />;
                case 'Decision-Making Task' : return <SettingTask 
                    content = 'Decision-Making Task Selected '
                    onChange={conditionContentChange}
                    value={conditionContent}
                    />;
                case 'Sentence-Level Task' : return <SettingTask 
                    content = 'Sentence-Level Task Selected'
                    onChange={conditionContentChange}
                    value={conditionContent}
                    />;
            default : return <p>Select Task Type </p>

            }
               
        })()}
        <WorkerRequiement 
            title = 'Worker Requirement'
            onChangeCondition ={conditionChange}
            onChange = {WorkerHandleChange}

        
        />

        <Button 
            type='submit'
            text='Save'
            onClick={saveContent}
        />

    </div>
}

export default NewRequesterTask