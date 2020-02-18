import React, { Component } from 'react';

class Home extends Component { 
    render(){
        console.log(this.props.style)
        return(
            <div className="container">
                <h4 className="center">Home</h4>
                <p style={{color: this.props.style,cursor:"pointer"}} onClick={this.props.onClickChangeColor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta sed dolorem cupiditate cum non quaerat, odit neque facilis recusandae sequi laudantium porro, ducimus commodi dolores quia fugiat. Et, quaerat.</p>
            </div>
        )
    }
}

export default Home