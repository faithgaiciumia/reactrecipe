import React from 'react';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap';


const TopBar = (props) => {       
// const onChangeHandler = (event) => {    
//         console.log(event.target.value);
//         return{
//             inputMeal: event.target.value
//         };    
// }
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Recipe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home"></Nav.Link>
        <Nav.Link href="#link"></Nav.Link>        
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event => props.changed(event)}/>
        <Button variant="outline-warning" onClick={event => props.submit(event)}>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default TopBar;