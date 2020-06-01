import React, { Component } from 'react';
import Meal from './Components/Meal';
import SearchResults from './Components/SearchResults';

import { Button } from 'react-bootstrap';

class App extends Component{
    //TODO
    //1. Display Random Meal
    //2. Search and Display Meal
  state = {
      meals: "",
      inputMeal:"",
      fetchedMeals:"",      
  }  
  onChangeHandler(event){
      this.setState({inputMeal: event.target.value});
      console.log(this.state.inputMeal);

  }
  handleSubmit(event){
      this.fetchSearchMeal();
      event.preventDefault();
  }
  fetchSearchMeal(){
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.state.inputMeal)
      .then(res => res.json())
      .then((res)=> {
          this.setState({fetchedMeals:res.meals});          
      }, {})
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
            <SearchResults results={this.state.fetchedMeals}/>
            <Meal meal={this.state.meals}/>            
         </div>
     );
 }
}
  

export default App;