import React from "react";
import './todo-item.css'

const ToDoItem = ({todoProps}) => {
  const {task, important} = todoProps;
  const my_style = {
    color: important ? '#0095ff' : 'black',
    fontWeight: important ? 'bold': '400'
  }

  return (
    <span className='todo_item d-flex'>
      <span style={my_style} className='todo_item_text'>
        {task}
      </span>
      <div className='buttons'>
        <button type="button" className="btn btn-sm btn-outline-danger">
        <i className="fa fa-trash-o"/>
      </button>

      <button type="button" className="btn btn-sm btn-outline-success">
        <i className="fa fa-exclamation"/>
      </button>
      </div>
    </span>
  )
}

export default ToDoItem;