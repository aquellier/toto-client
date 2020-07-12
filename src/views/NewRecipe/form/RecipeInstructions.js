import React from 'react';

class RecipeInstructions extends React.Component {
  state = {
    instructions: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({instructions: nextProps.instructions});
  };

  onChange = (e) => {
    this.setState({instructions: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { instructions: this.state.instructions }
    )
  };

  render() {
    const { instructions } = this.state;
    return (
      <div>
        <label htmlFor="recipeInstructions">Recipe Instructions</label>
          <textarea
            className="form-control"
            id="recipeInstructions"
            name="instructions"
            rows="5"
            required
            onChange={this.onChange}
            onBlur={this.onBlur}
            value={instructions}
          />
        </div>
    )
  }
};

export default RecipeInstructions;
