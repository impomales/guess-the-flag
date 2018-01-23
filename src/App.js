import React, { Component } from 'react';
import GuessForm from './GuessForm';
import Flag from './Flag';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      flag: ''
    };
  }
  
  componentDidMount() {
    const  url = 'https://restcountries.eu/rest/v2/all';
    let countries = [];
    
    fetch(url)
      .then(data => data.json())
      .then(data => {
        for (let i = 0; i < 4; i++) {
          const randomIndx = Math.floor(Math.random() * data.length);
          let country = {
            name: data[randomIndx].name,
            flag: data[randomIndx].flag
          };
          countries.push(country);
        }
        
        const flag = countries[Math.floor(Math.random() * countries.length)].flag;
        this.setState({ countries, flag });
      })
      .catch(e => console.log(e));
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>Guess The Flag</h1>
        </header>
        <GuessForm />
        <Flag />
      </div>
    );
  }
}

export default App;
