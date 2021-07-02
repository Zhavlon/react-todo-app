import React from "react";
import ToDoItem from "../todo-item";
import './todo-list.css'

const ToDoList = ({data}) => {

  const todos = data.map(item => {
    const {id, ...todoProps} = item;
    return (
      <li key={id} className='list-group-item'>
        <ToDoItem todoProps={todoProps}/>
      </li>
    )

  })

  return (
    <ul className='list-group'>
      {todos}
    </ul>
  )
}

export default ToDoList;