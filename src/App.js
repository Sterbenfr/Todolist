import logo from './logo.svg';
import React, { Component } from 'react'
import TodoList from './TodoList.js'
import TodoItems from './TodoItems.js'
import './App.css'
import add from './AddTask.js'
import componentDidMount from './Login';


class App extends Component {

  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {Task:'', key:''},
      user: {email:'',id:''}
    }
  }

  inputElement = React.createRef()

  addItem = e => {
    e.preventDefault()
    add(this.state.currentItem.Task,this.state.currentItem.key)
    
    const newItem = this.state.currentItem
    if (newItem.Task !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { Task: '', key: '' },
      })
    }
  }

  addUser= e =>{
    e.preventDefault()
    componentDidMount(this.state.user.email,this.state.user.id)
  }

handleInputUser = e => {
  const { name, value } = e.target;
  const user = { ...this.state.user, [name]: value };
  this.setState({ user });
}

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { Task: {itemText}, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  deleteItem = key =>{
    const deletedItem = this.state.items.filter(item =>{
      return item.key !== key 
    })
    this.setState({
      items : deletedItem,
    })
  }

  getNumber = item =>{
    let count =0
    this.state.items.forEach((element,index) => {
      if(element === item){
          count = index
        }
    });
    return count+1
  }
 
 render() {
   return (
    <div className="Content">
      <div>
        <h1> To Do List</h1>
      </div>

      <div className="App">
          <TodoList addItem={this.addItem}  inputElement={this.inputElement} handleInput={this.handleInput}
          currentItem={this.state.currentItem} addUser={this.addUser} handleInputUser={this.handleInputUser}
          User = {this.state.user}/>
          <TodoItems entries={this.state.items}deleteItem={this.deleteItem}Number={this.getNumber} />
      </div>
    </div>

   )
 }

}
export default App
