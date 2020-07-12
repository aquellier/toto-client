import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getRecipes } from "../../actions/recipesActions/index";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderSearch from "components/Header/HeaderSearch.js";

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

class Recipes extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const recipes = this.props.recipes.recipes;
    const allRecipes = recipes.map((recipe, index) => (
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
    ));
    const noRecipe = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No recipes yet. Why not <Link to="/new_recipe">create one</Link>
        </h4>
      </div>
    );
    return (
      <>
      <Header
          color="dark"
          brand="Toto Kitchen"
          rightLinks={<HeaderLinks />}
          search={<HeaderSearch />}
          sticky
        />
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Recipes for every occasion</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular recipes, our latest
              additions, and our editor’s picks, so there’s sure to be something
              tempting for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/new_recipe" className="btn custom-button">
                Create New Recipe
              </Link>
            </div>
            <div className="row">
              {recipes.length > 0 ? allRecipes : noRecipe}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { getRecipes }
)(Recipes);
