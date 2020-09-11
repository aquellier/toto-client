import React from 'react';
import CustomInput from "components/CustomInput/CustomInput";

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
        <CustomInput
          labelText="Recipe instructions..."
          id="recipeInstructions"
          required
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            name: "instructions"
          }}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={instructions}/>
      </div>
    )
  }
};

export default RecipeInstructions;
