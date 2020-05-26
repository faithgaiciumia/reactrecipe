import React from 'react';
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RandomMeals = (props) => {
  if(!props.meal) return null;  
  const{
      strMeal,
      strMealThumb,
      strInstructions,
      strArea,
      strCategory
  } = props.meal;
    return(
        <section>
            <h2>Featured Meal</h2> 
        <div className="meal">
            <div className="meal-img"> 
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="meal-details">
                <h3 className="meal-title">
                    {strMeal}
                </h3>
                <p className="meal-instruction">
                    {strInstructions.substring(0,200) + "..."}
                </p>
                <ul className="meal-info">
                    <li>
                        Category: 
                        <strong>
                            {strCategory}
                        </strong>
                    </li>
                    <li>
                        Area: 
                        <strong>
                            {strArea}
                        </strong>
                    </li>
                </ul>
                <button className="btn">
                    View Recipe <FontAwesomeIcon icon={faLongArrowAltRight} /> 
                </button>
            </div>
        </div>
        </section>
    );
}

export default RandomMeals;