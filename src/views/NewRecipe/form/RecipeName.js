import React from 'react';

class RecipeName extends React.Component {
  state = {
    name: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.name});
  };

  onChange = (e) => {
    this.setState({name: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { name: this.state.name }
    )
  };

  render() {
    const { nameError } = this.props;
    const { name } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="recipeName">Recipe name</label>
          <input
            type="text"
            name="name"
            id="recipeName"
            className="form-control"
            required
            onChange={this.onChange}
            onBlur={this.onBlur}
            value={name} />
          {nameError && <div>This name is already taken</div> }
      </div>
    )
  }
};

export default RecipeName;
