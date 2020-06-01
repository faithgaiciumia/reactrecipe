import React, { Component } from 'react';
import Meal from './Components/Meal';

import { Button } from 'react-bootstrap';
class App extends Component{
    //TODO
    //1. Display Random Meal
    //2. Search and Display Meal
  state = {
      meals: "",
      inputMeal:""
  }  
  onChangeHandler(event){
      this.setState({inputMeal: event.target.value});
      console.log(this.state.inputMeal);

  }
  handleSubmit(event){
      console.log(this.state.inputMeal);
      event.preventDefault();
  }
  componentDidMount () {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then(res=> res.json())
      .then(
          (res) => {
              this.setState ({
                  meals: res.meals[0]
              });
              console.log(this.state.meals);
          }, {}
      )
  }
 render () {
     return (            
          <div>
            <input className="form-control" type="text" placeholder="Search Meal" aria-label="Search" onChange={event => this.onChangeHandler(event)}/>
            <Button variant="primary" type="submit" onClick={event => this.handleSubmit(event)}>
                 Submit
            </Button>
            <h1>Search Results:</h1>
            <Meal meal={this.state.meals}/>            
         </div>
     );
 }
}
  

export default App;