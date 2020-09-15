import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// Form
import UserFirstName from './form/UserFirstName';
import UserLastName from './form/UserLastName';
import UserEmail from './form/UserEmail';
import UserPassword from './form/UserPassword';
import { updateUserAttributes, createUser } from "../../actions/usersActions/index";
// import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/views/loginPage.js";

import image from "assets/images/hands.jpg";

const useStyles = styles;

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimation: "cardHidden"
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.props.user);
    debugger
    // try {
    //   await axios.post('http://localhost:3000/signup', credentials);
    //   await this.props.history.push('/signup');
    // } catch (err) {
    //   console.log('error: ', err.message)
    // }
  };

  componentDidMount() {
    setTimeout(() => { this.setState({ cardAnimation: '' }) }, 700);
  }

  updateUserAttributes = (newAttributes) => {
    this.props.updateUserAttributes(newAttributes)
  };


  render () {
    const { classes } = this.props;
    const { first_name, last_name, email, password, errors } = this.props.user;
    return (
      <>
      <div>
        <Header
          absolute
          color="transparent"
          brand="Toto Kitchen"
          rightLinks={<HeaderLinks />}
          fixed
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimation]}>
                  <form className={classes.form} onSubmit={this.onSubmit}>

                    {/* Card Header for facebook login
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader> */}
                    <p className={classes.divider}>Sign Up</p>
                    <CardBody>
                      <UserFirstName
                        first_name={first_name}
                        firstNameError={errors.first_name}
                        onAttributeUpdate={this.updateUserAttributes}/>
                      <UserLastName
                        last_name={last_name}
                        lastNameError={errors.last_name}
                        onAttributeUpdate={this.updateUserAttributes}/>
                      <UserEmail
                        email={email}
                        emailError={errors.email}
                        onAttributeUpdate={this.updateUserAttributes}/>
                      <UserPassword
                        password={password}
                        passwordError={errors.password}
                        onAttributeUpdate={this.updateUserAttributes}/>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple type="submit" color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (user) => {
      dispatch(createUser(user))
    },
    updateUserAttributes: (newAttributes) => {
      dispatch(updateUserAttributes(newAttributes))
    }
  };
}

function mapStateToProps(storeState, componentProps) {
  const { user } = storeState;
  return { user };
}

const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

//CustomInput
//   labelText="Email..."
//   id="email"
//   formControlProps={{
//     fullWidth: true
//   }}
//   inputProps={{
//     type: "email",
//     endAdornment: (
//       <InputAdornment position="end">
//         <Email className={classes.inputIconsColor}/>
//       </InputAdornment>
//     )
//   }}
//   onChange={this.onChange}
// />

export default withStyles(useStyles)(LoginForm);
