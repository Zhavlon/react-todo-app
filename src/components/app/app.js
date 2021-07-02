import React from "react";
import ToDoList from "../todo-list";
import './app.css';
import ToDoHeader from "../todo-header/todo-header";
import ToDoSearch from "../todo-search";
import ToDoFilter from "../todo-filter/todo-filter";

const App = () => {

  const Data = [
    {task: 'Drink coffee', important: false, id: 1},
    {task: 'Learn react', important: true, id: 2},
    {task: 'Make project', important: false, id: 3},
  ]
  return (
    <div className='todo_app'>
      <ToDoHeader todoLeft={1} todoDone={3}/>
      <div className='search_panel d-flex'>
        <ToDoSearch/>
        <ToDoFilter/>
      </div>
      <ToDoList data={Data}/>
    </div>
  )
}

export default App;