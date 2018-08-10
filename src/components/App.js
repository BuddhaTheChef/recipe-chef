import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="main-title">Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
      </div>
    )
  }
}

export default App;
