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
  //   <Card>
  //   <Card.Body>
  //     <Card.Text>
  //       {displayMeal.strMeal}
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Img variant="bottom" src= {displayMeal.strMealThumb} style={{height: "100px", width: "100px"}} />
  // </Card>
  <div key={displayMeal.idMeal}>
    <h4>
      <b>
      {displayMeal.strMeal}
      </b>
    </h4>
    <div>
      <img src={displayMeal.strMealThumb}/>
    </div>
  </div>
    );
    });
    return (
      <div >
        {mediaList}
      </div>
    );
  }
  
}

export default MealComponent;