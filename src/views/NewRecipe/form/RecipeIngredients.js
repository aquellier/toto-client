import React from 'react';

class RecipeIngredients extends React.Component {
  state = {
    ingredients: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ingredients: nextProps.ingredients});
  };

  onChange = (e) => {
    this.setState({ingredients: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { ingredients: this.state.ingredients }
    )
  };

  render() {
    const { ingredients } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="recipeInstructions">Recipe Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="recipeIngredients"
            className="form-control"
            required
            onChange={this.onChange}
            onBlur={this.onBlur}
            value={ingredients}
          />
          <small id="ingredientsHelp" className="form-text text-muted">
            Separate each ingredient with a comma.
          </small>
      </div>
    )
  }
};

export default RecipeIngredients;
