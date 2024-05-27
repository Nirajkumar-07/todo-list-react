import React, { useState } from 'react'

function Todo_list(props) {
  return (
    <div className='list-body'>
        <li>{props.item} <span onClick={()=>{
            props.deleteItem(props.index)
        }}><i className="fa-regular fa-trash-can"></i></span></li>
    </div>
  )
}

export default Todo_list