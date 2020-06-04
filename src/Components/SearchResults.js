import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const SearchResults = (props) => {
    const meal=props.results; 
    console.log(meal);          
    if (meal.length===0){
        return (
            null
        );
    }
    else {
        const cardList = meal.map(meal => {
            return (                                              
                    <Card key={meal.idMeal}>
                    <Card.Img variant="top" src={meal.strMealThumb} />
                    <Card.Body>
                        <Card.Title> {meal.strMeal} </Card.Title>
                        <Card.Text>
                        {meal.strInstructions.substring(0,200)+"..."}
                        </Card.Text>
                    </Card.Body>                    
                    </Card>               
            )
        });
        return (           
            <div>
                <h3>Search Results:</h3>
                <CardGroup>    
                    {cardList}              
                </CardGroup>
            </div>
        );
    }    
   
}

export default SearchResults;