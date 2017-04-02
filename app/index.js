import Hobbit from './Hobbit';

let Frodo = new Hobbit("Frodo Baggins", 4.5);
Frodo.greet();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const apiKey = '45c1c84417457ca5016a63db131d322a';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: 'London',
      description: ''
    }
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city}`)
      .then(response => response.json())
      .then(data => {
        this.setState({description: data.weather[0].description});
      });
  }

  render() {
    return(
      <div>
        <h3>React JS and JSX in action!</h3>
        <hr />
        <h4>Weather Report for {this.state.city}!</h4>
        <h5>{this.state.description}</h5>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
