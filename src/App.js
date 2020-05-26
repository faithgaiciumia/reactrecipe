import React, { Component } from 'react';
import {RandomMeals} from './components';

//TODO
//1. Search for meals...
//2. Display the results...
//3. Random/featured meal
//4. Favorite recipe
class App extends Component{
  state = {
    inputMeal: "",
    meals: ""
  }
  onChangeHandler(event) {
   this.setState({inputMeal: event.target.value});
  }
  handleSubmit(event){
    //alert('A name was submitted: '+ this.state.inputMeal);
    this.fetchMeals(this.state.inputMeal)
    event.preventDefault();
  }
  async fetchMeals(meal){   
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+ meal);
    const data = await res.json();        
    this.setState({
      meals: data.meals[0]
    });

  }
  render () {
    return (
      <div className="App">
        <form onSubmit={event => this.handleSubmit(event)}>
        <label>Search Meal: </label>
        <input type="text" value={this.state.inputMeal} onChange={event => this.onChangeHandler(event)}/>
        <input type="submit" value="Submit" />
        </form>
        <section className="grid">
        <RandomMeals meal={this.state.meals}/> 
        <RandomMeals meal={this.state.meals}/> 
        </section>                   
        <section className="container">
          <h2>
            Search Results:
          </h2>
          <RandomMeals meal={this.state.meals}/>
          <RandomMeals meal={this.state.meals}/>
          </section>  
      </div>
    );
  }
  
  
}

export default App;
