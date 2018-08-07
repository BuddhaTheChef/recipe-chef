import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
        {' '}
        <FormControl type="text" placeholder="Adobo, Eggs, Garlic and Rice" />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Pork Adobo Fried Rice" />
        </FormGroup>
        {' '}
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default SearchRecipes;
