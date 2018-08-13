import React, {Component} from 'react';
import { favoriteRecipe } from '../actions';
import { connect } from 'react-redux';

class RecipeItem extends Component {
  constructor() {
    super();

    this.state = {
      favorited: false
    }
  }

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({favorited: true});
  }

  render() {
    let {recipe} = this.props;
    return (
      <div className="recipe-item">
        {
          this.props.favoriteButton ?

            this.state.favorited ?
            <div className="star">&#9733;</div>
            :
            <div className="star" onClick={() => this.favorite(recipe)}>
              &#9734;
            </div>
          
          :
          <div></div>
        }

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
