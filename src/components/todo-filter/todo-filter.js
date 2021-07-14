import React from "react";
import './todo-filter.css';

const ToDoFilter = (props) => {
  return (
    <div className='btn-group'>
      <button type="button" onClick={() => {props.setStatus('All')}} className="btn btn-primary">All</button>
      <button type="button" onClick={() => {props.setStatus('Active')}} className="btn btn-outline-dark">Active</button>
      <button type="button" onClick={() => {props.setStatus('Done')}} className="btn btn-outline-dark">Done</button>
    </div>
  )
}
export default ToDoFilter;