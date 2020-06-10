import React, { Component } from 'react';
import MealComponent from './Components/Meal';
import SearchResults from './Components/SearchResults';
import TopBar from './Components/TopBar';

import { Button } from 'react-bootstrap';

class App extends Component{
    //TODO
    //1. Display Random Meal 
    //2. Search and Display Meal ✔ 

  state = {
      randomMeal: [],
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
          }, {}
      )
  }
 render () {
     return (            
          <div className="grid grid-960">
            <header className="headerimg" >
                <img className="img" src="https://images.pexels.com/photos/4197438/pexels-photo-4197438.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="header"/>
            </header>
            <TopBar className="navbar" changed={event => this.onChangeHandler(event)} submit={event => this.handleSubmit(event)}/>                                    
            <SearchResults className="navbar" results={this.state.fetchedMeals}/>           
            <MealComponent className="navbar" randomMeals={this.state.randomMeal}/>            
         </div>
     );
 }
}
  

export default App;