import React from "react";
import ToDoItem from "../todo-item";
import './todo-list.css'

const ToDoList = ({data, onToggleImportant, onToggleDelete}) => {

  const todos = data.map(item => {
    const {id} = item;
    return (
      <li key={id} className='list-group-item'>
        <ToDoItem onToggleDelete={onToggleDelete} onToggleImportant={onToggleImportant} {...item}/>
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