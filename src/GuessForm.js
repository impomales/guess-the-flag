import React, { Component } from 'react';

class GuessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            haveGuessed: false,
            isCorrect: false
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.value) return;
        var isCorrect = this.props.checkGuess(this.state.value);
        this.setState({ haveGuessed: true, isCorrect});
    }
    
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    
    handleNext() {
        this.props.refresh();
        this.setState({ value: '', haveGuessed: false, isCorrect: false });
    }
    
    render() {
        const { haveGuessed, isCorrect } = this.state;
        
        if (!haveGuessed) {
            const countries = this.props.countries.map((country, i) => {
            return (
                <label key={i}>  
                    <input 
                    type='radio' 
                    value={ country.name }
                    checked={ country.name === this.state.value }
                    onChange={ this.handleChange }/>
                    { country.name }
                </label>
                    );
            });
            return (
                <form onSubmit={this.handleSubmit}>
                    { countries }
                    <button type="submit">Guess</button>
                </form>
            );
        }
        else {
            let result;
            if (isCorrect) {
                result = <span>Correct: {this.state.value}</span>;
            } else result = <span>Incorrect: {this.state.value}</span>;
            
            return (
              <div>
                { result }<button onClick={this.handleNext}>Next</button>
              </div>  
            );
        }
    }
}

export default GuessForm;