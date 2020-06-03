import React from 'react';
import {Media,Card} from 'react-bootstrap';

const meal = (props) => {    
  const meal = props.randomMeals;
  console.log(meal);
    if (meal===undefined){
      return (
          null
      );
  }
  else {
  //   const cardList = meal.map(meal => {
  //     return (                                              
  //             <Card key={meal.idMeal}>
  //             <Card.Img variant="top" src={meal.strMealThumb} />
  //             <Card.Body>
  //                 <Card.Title> {meal.strMeal} </Card.Title>
  //                 <Card.Text>
  //                 {meal.strInstructions.substring(0,200)+"..."}
  //                 </Card.Text>
  //             </Card.Body>                    
  //             </Card>               
  //     );
  // });
    return (
      <div>
        <h3>Featured Meal: </h3>
        working on thiss
      </div>
    );
  }
  
  
  
}
export default meal;