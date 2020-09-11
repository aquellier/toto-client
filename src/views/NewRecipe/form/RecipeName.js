import React from 'react';
import CustomInput from "components/CustomInput/CustomInput.js";

class RecipeName extends React.Component {
  state = {
    name: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.name});
  };

  onChange = (e) => {
    this.setState({name: e.target.value})
    console.log(this.state)
  };

  onBlur = (e) => {
    debugger
    this.props.onAttributeUpdate(
      { name: this.state.name }
    )
  };

  render() {
    const { nameError } = this.props;
    const { name } = this.state;
    return (
      <div>
        <CustomInput
          labelText="Recipe name..."
          name="name"
          id="recipeName"
          required
          formControlProps={{
            fullWidth: true
          }}
          // inputProps={{
          //   type: "text",
          //   name: "name"
          // }}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={name}/>
          {nameError && <div>This name is already taken</div> }
      </div>
    )
  }
};

export default RecipeName;
