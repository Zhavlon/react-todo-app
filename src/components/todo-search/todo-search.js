import React from "react";
import './todo-search.css'

class ToDoSearch extends React.Component {
  state = {
    search: ''
  }

  setValue = (e) => {
    this.setState({
      search: e.target.value
    })
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <input type="text"
             onChange={this.setValue}
             value={this.state.search}
             className='form-control search-input'
             placeholder='search'/>
    )
  }
}


export default ToDoSearch;