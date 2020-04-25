import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { recipes: state.recipes };
}

const ConnectedRecipes = ({recipes}) => (
  recipes.map((recipe, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={recipe.image}
          className="card-img-top"
          alt={`${recipe.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <Link to={`/recipes/${recipe.id}`} className="btn custom-button">
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  ))
)


const List = connect(mapStateToProps)(ConnectedList);

export default List;
