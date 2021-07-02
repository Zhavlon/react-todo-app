import React from "react";
import ToDoList from "../todo-list";
import './app.css';
import ToDoHeader from "../todo-header/todo-header";
import ToDoSearch from "../todo-search";
import ToDoFilter from "../todo-filter/todo-filter";

class App extends React.Component {
  state = {
    data: [
      {task: 'Drink coffee', important: false, id: 1, done: false},
      {task: 'Learn react', important: true, id: 2, done: false},
      {task: 'Make project', important: false, id: 3, done: false},
    ],
    search: '',
    status: 'All'
  }

  onToggleImportant = (id) => {
    this.setState((old_state) => {
      const elem_idx = old_state.data.findIndex(item => item.id === id);
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
      const elem_idx = old_state.data.findIndex(item => item.id === id);

      const prev_todos = old_state.data.slice(0, elem_idx);
      const post_todos = old_state.data.slice(elem_idx + 1);

      const new_state = [...prev_todos, ...post_todos];

      return {
        data: new_state
      }
    })
  }

  onToggleDone = (id) => {
    this.setState((old_state) => {
      const elem_idx = old_state.data.findIndex(item => item.id === id);
      const old_todo = old_state.data[elem_idx];
      const new_todo = {...old_todo, done: !old_todo.done};

      const prev_todos = old_state.data.slice(0, elem_idx);
      const post_todos = old_state.data.slice(elem_idx + 1);

      const new_state = [...prev_todos, new_todo, ...post_todos];

      return {
        data: new_state
      }
    })
  }

  onSearch = (data) => {
    this.setState({
      search: data
    })
  }

  onSearchTodos = (elements, filter) => {
    if (filter.length < 1) {
      return elements
    }

    const new_elements = elements.filter(item => {
      return item.task.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })

    return new_elements
  }

  onFilterTodos = (elements, status) => {
    if (status === 'All') {
      return elements
    }
    if (status === 'Active') {
      return elements.filter(item => !item.done)
    }
    if (status === 'Done') {
      return elements.filter(item => item.done)
    }
  }

  onStatusAll = () => {
    this.setState({
      status: 'All'
    })
  }
  onStatusActive = () => {
    this.setState({
      status: 'Active'
    })
  }
  onStatusDone = () => {
    this.setState({
      status: 'Done'
    })
  }

  render() {
    const filtered_elements = this.onFilterTodos(this.state.data, this.state.status)
    const new_elements = this.onSearchTodos(filtered_elements, this.state.search)

    return (
      <div className='todo_app'>
        <ToDoHeader todoLeft={1} todoDone={3}/>
        <div className='search_panel d-flex'>
          <ToDoSearch onSearch={this.onSearch}/>
          <ToDoFilter onStatusAll={this.onStatusAll} onStatusActive={this.onStatusActive}
                      onStatusDone={this.onStatusDone}/>
        </div>
        <ToDoList onToggleDone={this.onToggleDone} onToggleDelete={this.onToggleDelete}
                  onToggleImportant={this.onToggleImportant} data={new_elements}/>
      </div>
    )
  }
}

export default App;