import React, { Component } from "react";
import img from "./img/nazare.jpg";
import "./App.css"

//Desenvolva um contador que tenha as seguintes funcionalidades:
//- O contador não pode chegar abaixo de 0
//- O contador não pode chegar acima de 10

class App extends Component {
  state = {
    number: 0
  };

  add = () => {
    if(this.state.number < 10){
      this.setState({
        number: this.state.number + 1
      });
    }

  };

  remove = () => {
    if(this.state.number > 0 ){
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  reset = () => {
    if(this.state.number > 0 ){
      this.setState({
        number: 0
      });
    }
  };

  render() {
    return (
      <div className="container">
        <img src={img} alt="Nazare" />
        <h1 className="title" >Contador  {this.state.number}</h1>
        <button  className="aumentar" onClick={this.add} >Aumentar</button>
        <button className="diminuir" onClick={this.remove} >Diminuir</button>
        <button className="reset" onClick={this.reset} >Reset</button>
        

      </div>
    );
  }
}

export default App;
