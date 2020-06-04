import React from 'react';
import { Media, Card, CardGroup } from 'react-bootstrap';

const MealComponent = (props) => {
  const DisplayMeals = props.randomMeals;
  console.log(DisplayMeals);
  if (DisplayMeals === undefined){
    return (
        null
    );
  }
  else {
    const mediaList = DisplayMeals.map(displayMeal => {
    return (
    <Card>
    <Card.Body>
      <Card.Text>
        {displayMeal.strMeal}
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src= {displayMeal.strMealThumb} style={{height: "100px", width: "100px"}} />
  </Card>
    );
    });
    return (
      <ol>
        {mediaList}
      </ol>
    );
  }
  
}

export default MealComponent;