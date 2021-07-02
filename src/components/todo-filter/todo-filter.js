import React from "react";
import './todo-filter.css';

const ToDoFilter = () => {
  return (
    <div className='btn-group'>
      <button type="button" className="btn btn-primary">All</button>
      <button type="button" className="btn btn-outline-dark">Active</button>
      <button type="button" className="btn btn-outline-dark">Done</button>
    </div>
  )
}
export default ToDoFilter;

