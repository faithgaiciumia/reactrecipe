import React, {useState, useEffect} from 'react';

const RandomMeals = () => {
const [meal, setMeal] = useState(undefined);

useEffect(() => {
    async function getMeal(){
     const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
     const data = await res.json();
     console.log(data);

     setMeal(data.meals[0]);     
   }
   getMeal();    
  }, []);

  if(!meal) return null;

  console.log("meal is"+meal.strMeal);

  const{
      strMeal,
      strMealThumb,
      strInstructions,
      strArea,
      strCategory
  } = meal;


    return(
        <div className="meal">
            <div className="meal-img"> 
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="meal-details">
                <h2 className="meal-title">
                    {strMeal}
                </h2>
                <p className="meal-instruction">
                    {strInstructions.substring(0,100) + "..."}
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
            </div>
        </div>
    );
}

export default RandomMeals;