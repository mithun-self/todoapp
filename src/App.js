import React, { Component } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Posts from './components/Posts';
import ViewTodos from './components/ViewTodos';

class App extends Component {

  state = {
    colors: ["red", "yellow", "blue", "green", "purple", "pink"],
    style: ''
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
          <Route path='/posts' component={Posts} />
          <Route path='/todos' component={ViewTodos} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
