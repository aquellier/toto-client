import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import styles from "assets/jss/views/loginPage.js";
const useStyles = styles;

class UserFirstName extends React.Component {
  state = {
    first_name: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({first_name: nextProps.first_name});
  };

  onChange = (e) => {
    this.setState({first_name: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { first_name: this.state.first_name }
    )
  };

  render() {
    const { classes, firstNameError } = this.props;
    const { first_name } = this.state;
    return (
      <div>
        <CustomInput
          labelText="First Name..."
          id="firstName"
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
          value={first_name}
        />
      </div>
    )
  }
};

export default withStyles(useStyles)(UserFirstName);
