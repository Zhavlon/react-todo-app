import React from 'react';
import './todo-add.css';

class TodoAdd extends React.Component {

  state = {
    value: ''
  }

  changeValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onSubmitTodos = (e) => {
    e.preventDefault();
    if(this.state.value) {
      this.props.onAddTodos(this.state.value)
      this.setState({
        value: ''
      })
    }
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmitTodos}
        className={'todo_add'}>
        <input
          onChange={this.changeValue}
          value={this.state.value}
          className={'form-control'}
          placeholder={'new todo'}
          type="text"/>
        <button
          className={'btn btn-outline-success'}
          type={"submit"}>Add</button>
      </form>
    );
  }
}

export default TodoAdd;