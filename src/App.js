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
    ]
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
  render(){
    return (
      
      <div className="container-fluid">
        <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
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
