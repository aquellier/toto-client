import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/views/homePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props
  return(
    <div>
      <Header
          color="transparent"
          brand="Toto Kitchen"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "black"
          }}
          {...rest}
        />
      <Parallax filter image={require("assets/images/table_background.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <h1 className="display-4">Food Recipes</h1>
            <p className="lead">
              A curated list of recipes for the best homemade meal and delicacies.
            </p>
            <hr className="my-4" />
            <Link
              to="/recipes"
              className="btn btn-danger btn-lg custom-button"
              role="button"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};
