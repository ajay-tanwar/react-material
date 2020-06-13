import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = () => {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Exercises
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Header;