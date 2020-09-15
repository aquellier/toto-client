import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import Icon from "@material-ui/core/Icon";
import styles from "assets/jss/views/loginPage.js";
const useStyles = styles;

class UserPassword extends React.Component {
  state = {
    password: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({password: nextProps.password});
  };

  onChange = (e) => {
    this.setState({password: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { password: this.state.password }
    )
  };

  render() {
    const { classes, passwordError } = this.props;
    const { password } = this.state;
    return (
      <div>
        <CustomInput
          labelText="Password ..."
          id="password"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "password",
            endAdornment: (
              <InputAdornment position="end">
                <Icon className={classes.inputIconsColor}>
                  lock_outline
                </Icon>
              </InputAdornment>
            ),
          }}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={password}
        />
      </div>
    )
  }
};

export default withStyles(useStyles)(UserPassword);
