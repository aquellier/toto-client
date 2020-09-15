import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import styles from "assets/jss/views/loginPage.js";
const useStyles = styles;

class UserLastName extends React.Component {
  state = {
    last_name: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({last_name: nextProps.last_name});
  };

  onChange = (e) => {
    this.setState({last_name: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { last_name: this.state.last_name }
    )
  };

  render() {
    const { classes, lastNameError } = this.props;
    const { last_name } = this.state;
    return (
      <div>
        <CustomInput
          labelText="Last Name..."
          id="lastName"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "text",
            endAdornment: (
              <InputAdornment position="end">
                <People className={classes.inputIconsColor}/>
              </InputAdornment>
            ),
          }}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={last_name}
        />
      </div>
    )
  }
};

export default withStyles(useStyles)(UserLastName);
