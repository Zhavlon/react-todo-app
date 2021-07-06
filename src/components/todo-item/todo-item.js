import React from "react";
import './todo-item.css'

const ToDoItem = ({task, important, id, onToggleImportant, onToggleDelete, done, onToggleDone}) => {
  const my_style = {
    color: important ? '#0095ff' : 'black',
    fontWeight: important ? 'bold' : '400',
    textDecoration: done ? 'line-through' : 'none',
    fontSize: done ? '1.2em' : '1.3em',
    fontStyle: done ? 'italic' : 'normal'
  }

  const makeShort = (task) => {
    if(task.length > 16) {
      return `${task.slice(0, 16)}...`
    }
    return task
  }

  return (
    <span className='todo_item d-flex'>
      <span style={my_style}
            onClick={() => onToggleDone(id)}
            className='todo_item_text'>
        {makeShort(task)}
      </span>
      <div className='buttons'>
        <button type="button"
                onClick={() => onToggleDelete(id)}
                className="btn btn-sm btn-outline-danger">
        <i className="fa fa-trash-o"/>
      </button>

      <button type="button"
              onClick={() => onToggleImportant(id)}
              className="btn btn-sm btn-outline-success">
        <i className="fa fa-exclamation"/>
      </button>
      </div>
    </span>
  )
}

export default ToDoItem;