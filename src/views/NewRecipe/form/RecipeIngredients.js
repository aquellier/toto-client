import React from 'react';
import CustomInput from "components/CustomInput/CustomInput.js";

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
    const { ingredientsError } = this.props;
    const { ingredients } = this.state;
    return (
      <div>
        <CustomInput
          labelText="Recipe ingredients..."
          name="ingredients"
          id="recipeIngredients"
          required
          formControlProps={{
            fullWidth: true
          }}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={ingredients}/>
          {ingredientsError && <div>Errors in ingredients</div> }
          <small id="ingredientsHelp" className="form-text text-muted">
            Separate each ingredient with a comma.
          </small>
      </div>
    )
  }
};

export default RecipeIngredients;
