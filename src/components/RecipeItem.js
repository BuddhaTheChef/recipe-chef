import React, {Component} from 'react';
import { favoriteRecipe } from '../actions';
import { connect } from 'react-redux';

class RecipeItem extends Component {
  render() {
    let {recipe} = this.props;
    return (
      <div className="recipe-item">
        <div className="star" onClick={() => this.props.favoriteRecipe(recipe)}>
          &#9734;
        </div>
        <img className="recipe-image" src={recipe.thumbnail} alt={recipe.title}/>
      <div className="recipe-title">
        <a href={recipe.href}>
          <h4>{recipe.title}</h4>
        </a>
        <p>{recipe.ingredients}</p>
      </div>
    </div>
    )
  }
}

export default connect(null,{favoriteRecipe})(RecipeItem);
