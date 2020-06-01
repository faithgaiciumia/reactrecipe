import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const SearchResults = (props) => {
    const meal=props.results;           
    if (meal.length===0){
        return (
            <div>
                Search Not done
            </div>
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
                        {meal.strInstructions.substring(0,200)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                    </Card>               
            )
        });
        return (           
            <div>
                <h1>Search Results:</h1>
                <CardGroup>    
                    {cardList}              
                </CardGroup>
            </div>
        );
    }    
   
}

export default SearchResults;