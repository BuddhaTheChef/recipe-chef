import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    }
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    console.log('state', this.state, 'url', url);

    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => console.log('recipes', json))
  }

  render() {
    return (
      <Form className="form" >
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>
        {' '}
        <FormControl
          type="text"
          placeholder="Adobo, Eggs, Garlic and Rice"
          onChange={event => this.setState({ingredients: event.target.value})}
        />
        </FormGroup>
        {' '}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {' '}
          <FormControl
            type="text"
            placeholder="Pork Adobo Fried Rice"
            onChange={event => this.setState({dish: event.target.value})}
          />
        </FormGroup>
        {' '}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    )
  }
}

export default SearchRecipes;
