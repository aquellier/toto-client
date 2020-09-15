import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import styles from "assets/jss/views/loginPage.js";
const useStyles = styles;

class UserEmail extends React.Component {
  state = {
    email: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({email: nextProps.email});
  };

  onChange = (e) => {
    this.setState({email: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { email: this.state.email }
    )
  };

  render() {
    const { classes, emailError } = this.props;
    const { email } = this.state;
    return (
      <div>
        <CustomInput
          labelText="Email..."
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: "email",
            endAdornment: (
              <InputAdornment position="end">
                <Email className={classes.inputIconsColor}/>
              </InputAdornment>
            )
          }}
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={email}
        />
      </div>
    )
  }
};

export default withStyles(useStyles)(UserEmail);
