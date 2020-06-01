import React from 'react';
import {Media} from 'react-bootstrap';

const meal = (props) => {
    console.log(props.meal);
    return (
<ul className="list-unstyled" style={{padding:"20px"}}>
  <Media as="li">
    <img
      width={200}
      height={200}
      className="mr-3"
      src={props.meal.strMealThumb}
      alt="Generic placeholder"
    />
    <Media.Body>
    <h5>{props.meal.strMeal}</h5>
      <p>
        {props.meal.strInstructions}
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={200}
      height={200}
      className="mr-3"
      src={props.meal.strMealThumb}
      alt="Generic placeholder"
    />
    <Media.Body>
    <h5>{props.meal.strMeal}</h5>
      <p>
        {props.meal.strInstructions}
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={200}
      height={200}
      className="mr-3"
      src={props.meal.strMealThumb}
      alt="Generic placeholder"
    />
    <Media.Body>
    <h5>{props.meal.strMeal}</h5>
      <p>
        {props.meal.strInstructions}
      </p>
    </Media.Body>
  </Media>
</ul>
    );
}

export default meal;