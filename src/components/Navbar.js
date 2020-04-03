import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                <Link to="/recipes" className="btn btn-link">
                Back to recipes
                </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
  }
}

export default NavBar;
