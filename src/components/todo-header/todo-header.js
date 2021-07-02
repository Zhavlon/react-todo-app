import React from "react";
import './todo-header.css'


const ToDoHeader = ({todoDone, todoLeft}) => {
  return (
    <div className='todo_header d-flex'>
      <h1>ToDo List</h1>
      <h2>{todoLeft} more to do, {todoDone} done</h2>
    </div>
  )
}

export default ToDoHeader;