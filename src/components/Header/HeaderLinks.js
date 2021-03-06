/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { AccountBox } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/recipes" className={classes.navLink}>
          <Button
            color="transparent"
            className={classes.navLinkButton}
          >
            Recipes
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/recipes" className={classes.navLink}>
          <Button
            color="transparent"
            className={classes.navLinkButton}
          >
            Chefs
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/recipes" className={classes.navLink}>
          <Button
            color="transparent"
            className={classes.navLinkButton}
          >
            Addresses
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>

        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLinkButton}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="My Account"
          buttonProps={{
            className: classes.navLinkButton,
            color: "transparent"
          }}
          buttonIcon={AccountBox}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Profile
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Favorites
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Help
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Settings
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Log out
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
