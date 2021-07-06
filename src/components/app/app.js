import React from "react";
import ToDoList from "../todo-list";
import './app.css';
import ToDoHeader from "../todo-header/todo-header";
import ToDoSearch from "../todo-search";
import ToDoFilter from "../todo-filter/todo-filter";
import TodoAdd from '../todo-add';


class App extends React.Component {
  new_todo_id = 200;

  state = {
    data: [
      {task: 'Drink coffee', important: false, id: 1, done: false},
      {task: 'Learn react', important: true, id: 2, done: false},
      {task: 'Make project', important: false, id: 3, done: false},
    ],
    search: '',
    status: 'All'
  }

  changeParam = (param, id) => {
    this.setState((state) => {
      const elem_idx = state.data.findIndex(item => item.id === id);
      const old_todo = state.data[elem_idx];
      const value = old_todo[param]
      const new_todo = {...old_todo, [param]: !value};

      const prev_todos = state.data.slice(0, elem_idx);
      const post_todos = state.data.slice(elem_idx + 1);

      const new_state = [...prev_todos, new_todo, ...post_todos];

      return {
        data: new_state
      }
    })
  }

  onToggleImportant = (id) => {
    this.changeParam('important', id);
  }

  onToggleDone = (id) => {
    this.changeParam('done', id)
  }

  onToggleDelete = (id) => {
    this.setState((state) => {
      const elem_idx = state.data.findIndex(item => item.id === id);
      const new_state = [
        ...state.data.slice(0, elem_idx),
        ...state.data.slice(elem_idx + 1)
      ];

      return {
        data: new_state
      }
    })
  }

  setSearch = (data) => {
    this.setState({
      search: data
    })
  }

  setStatus = (status) => {
    this.setState({
      status: status
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

  onAddTodos = (task) => {
    const todo = {
      task: task,
      important: false,
      id: ++this.new_todo_id,
      done: false
    }

    this.setState((state) => {
      return {
        data: [...state.data, todo]
      }
    })
  }

  activeTodos = (data) => {
    const active = data.filter(todo => !todo.done)
    return active.length
  }

  doneTodos = (data) => {
    const done = data.filter(todo => todo.done)
    return done.length
  }


  render() {
    console.log(this.state)
    const filtered_elements = this.onFilterTodos(this.state.data, this.state.status)
    const new_elements = this.onSearchTodos(filtered_elements, this.state.search)
    const active = this.activeTodos(this.state.data);
    const done = this.doneTodos(this.state.data);


    return (
      <div className='todo_app'>
        <ToDoHeader todoLeft={active} todoDone={done}/>
        <div className='search_panel d-flex'>
          <ToDoSearch onSearch={this.setSearch}/>
          <ToDoFilter setStatus={this.setStatus}/>
        </div>
        <ToDoList onToggleDone={this.onToggleDone} onToggleDelete={this.onToggleDelete}
                  onToggleImportant={this.onToggleImportant} data={new_elements}/>
        <TodoAdd onAddTodos={this.onAddTodos}/>
      </div>
    )
  }
}

export default App;