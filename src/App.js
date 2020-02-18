import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Navbar from './components/Navbar'
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  state = {
    todos: [
      {id:1, content: 'Buy some milk'},
      {id:2, content: 'Play games now'}
    ],
    colors: ["red", "yellow", "blue", "green", "purple", "pink"],
    style: ''
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
    
  }
  onClickChangeColor = () => {
    const colors  = this.state.colors;
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      style : color
    })
    return this.state.style
    
  }
  render(){
    return (
      
      <div className="container-fluid">
        <BrowserRouter>
          <Navbar />
    <Route exact path='/'  render={props => <Home style={this.state.style} onClickChangeColor = {this.onClickChangeColor}/> }/>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
        
      </div>
      </div>
    );
  }
}

export default App;
