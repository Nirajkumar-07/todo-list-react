import React, { useState } from 'react'
import './Todo.css';

function Todo_input(props) {
    const [inputTask, setInputTask] = useState('');
  return (
    <div className='container'>
        <input type='text' placeholder='Enter tasks' className='control' value={inputTask} onChange={(e)=>{setInputTask(e.target.value)}} required />
        <button className='btn-add' onClick={()=>{
            if(inputTask === ''){
                alert("Please enter a task!")
            }
            else{
                props.addList(inputTask)
                setInputTask("")
            }
        }}>+</button>
    </div>
  )
}

export default Todo_input