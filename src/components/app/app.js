import React from "react";
import ToDoList from "../todo-list";
import './app.css';
import ToDoHeader from "../todo-header/todo-header";
import ToDoSearch from "../todo-search";
import ToDoFilter from "../todo-filter/todo-filter";

class App extends React.Component {
  state = {
    data: [
      {task: 'Drink coffee', important: false, id: 1},
      {task: 'Learn react', important: true, id: 2},
      {task: 'Make project', important: false, id: 3},
    ]
  }

  onToggleImportant = (id) => {
    this.setState((old_state) => {
      const elem_idx = old_state.data.findIndex(item => item.id === id );
      const old_todo = old_state.data[elem_idx];
      const new_todo = {...old_todo, important: !old_todo.important};

      const prev_todos = old_state.data.slice(0, elem_idx);
      const post_todos = old_state.data.slice(elem_idx + 1);

      const new_state = [...prev_todos, new_todo, ...post_todos];

      return {
        data: new_state
      }
    })
  }

  onToggleDelete = (id) => {
    this.setState((old_state) => {
      const elem_idx = old_state.data.findIndex(item => item.id === id );

      const prev_todos = old_state.data.slice(0, elem_idx);
      const post_todos = old_state.data.slice(elem_idx + 1);

      const new_state = [...prev_todos, ...post_todos];

      return {
        data: new_state
      }
    })
  }

  render () {
    return (
      <div className='todo_app'>
        <ToDoHeader todoLeft={1} todoDone={3}/>
        <div className='search_panel d-flex'>
          <ToDoSearch/>
          <ToDoFilter/>
        </div>
        <ToDoList onToggleDelete={this.onToggleDelete} onToggleImportant={this.onToggleImportant} data={this.state.data}/>
      </div>
    )
  }
}


export default App;