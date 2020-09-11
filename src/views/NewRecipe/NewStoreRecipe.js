// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecipes, addRecipe, updateRecipeAttributes } from "../../actions/recipesActions/index";
import { Link } from "react-router-dom";
import RecipeName from './form/RecipeName';
import RecipeIngredients from './form/RecipeIngredients';
import RecipeInstructions from './form/RecipeInstructions';

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import HeaderSearch from "components/Header/HeaderSearch";


class ConnectedForm extends Component {
  constructor(props) {
    super(props);
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.addRecipe(this.props.recipe);

  };

  updateRecipeAttributes = (newAttributes) => {
    this.props.updateRecipeAttributes(newAttributes)
  };

  render() {
    const { name, ingredients, instructions, errors } = this.props.recipe;
    return (
      <>
      <Header
          color="dark"
          brand="Toto Kitchen"
          rightLinks={<HeaderLinks />}
          search={<HeaderSearch />}
          sticky
        />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={this.submitForm}>
              <RecipeName
                name={name}
                nameError={errors.name}
                onAttributeUpdate={this.updateRecipeAttributes}/>
              <RecipeIngredients
                ingredients={ingredients}
                ingredientsError={errors.ingredients}
                onAttributeUpdate={this.updateRecipeAttributes}/>
              <RecipeInstructions
                instructions={instructions}
                instructionsError={errors.instructions}
                onAttributeUpdate={this.updateRecipeAttributes}/>
              <button type="submit" className="btn custom-button mt-3">
                Create Recipe
              </button>
              <Link to="/recipes" className="btn btn-link mt-3">
                Back to recipes
              </Link>
            </form>
          </div>
        </div>
      </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // getRecipes: (recipe) => {
    //   dispatch(getRecipes(recipe))
    // },
    addRecipe: (recipe) => {
      dispatch(addRecipe(recipe))
    },
    updateRecipeAttributes: (newAttributes) => {
      dispatch(updateRecipeAttributes(newAttributes))
    }

  };
}

function mapStateToProps(storeState, componentProps) {
  const { recipe } = storeState;
  return { recipe };
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
