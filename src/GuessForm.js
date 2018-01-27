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
    }
    
    handleSubmit(e) {
        e.preventDefault();
        var isCorrect = this.props.checkGuess(this.state.value);
        this.setState({ haveGuessed: true, isCorrect});
    }
    
    handleChange(e) {
        this.setState({ value: e.target.value });
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
                    <input type="submit" value="guess" />
                </form>
            );
        }
        else {
            if (isCorrect) {
                return <div>Correct: {this.state.value}</div>;
            } else return <div>Incorrect: {this.state.value}</div>;
        }
    }
}

export default GuessForm;