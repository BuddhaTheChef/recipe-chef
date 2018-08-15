import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';

class FavoriteRecipesList extends Component {
  render() {
    return (
      <div className="favorited-background-div">
        <h4><Link to='/' className="btn btn-primary link">Home</Link></h4>
        <h4 className="favroited-title">Favorited</h4>
        {
        this.props.favoriteRecipe.map((recipe, index) => {
          return (
            <RecipeItem
              key={index}
              recipe={recipe}
              favoriteButton={false}
             />
          )
        })
      }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    favoriteRecipe: state.favoriteRecipe
  }
}

export default connect(mapStateToProps, null)(FavoriteRecipesList)
