import React, { Component } from 'react'
import componentDidMount from './Login'

class TodoList extends Component {
    componentDidUpdate() {
      this.props.inputElement.current.focus()
    }
     
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <input
                placeholder="Task"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
              <button type="submit"> Add Task </button>
            </form>
          </div>
          <form onSubmit={this.props.addUser}>
  <input 
    placeholder="email"
    name="email"
    value={this.props.User.email}
    onChange={this.props.handleInputUser}
  />
  <input 
    placeholder='id'
    name="id"
    value={this.props.User.id}
    onChange={this.props.handleInputUser}
  />

            <button type="submit"> Login </button>
          </form>
        </div>
      )
    }
}




export default TodoList