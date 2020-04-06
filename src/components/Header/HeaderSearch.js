import React from "react";
// @material-ui/core components
import InputBase from '@material-ui/core/InputBase';
// @material-ui/icons components
import SearchIcon from '@material-ui/icons/Search';

// Styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/components/headerSearchStyle.js";

const useStyles = makeStyles(styles);

export default function Search(props) {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
