import React, { Component } from 'react';
import Meal from './Components/Meal';
import SearchResults from './Components/SearchResults';
import TopBar from './Components/TopBar';

import { Button } from 'react-bootstrap';

class App extends Component{
    //TODO
    //1. Display Random Meal 
    //2. Search and Display Meal ✔ 

  state = {
      randomMeal: "",
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
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res=> res.json())
      .then(
          (res) => {
              this.setState ({
                  randomMeal:res.meals
              });
              console.log(this.state.meals);
          }, {}
      )
  }
 render () {
     return (            
          <div>
            <TopBar changed={event => this.onChangeHandler(event)} submit={event => this.handleSubmit(event)}/>                                    
            <SearchResults results={this.state.fetchedMeals}/>
            <Meal randomMeals={this.state.randomMeal}/>            
         </div>
     );
 }
}
  

export default App;