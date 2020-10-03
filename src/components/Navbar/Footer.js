import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  foot: {
    fontWeight: 'bold',
    fontFamily: 'auto',
  },
});

function Footer({ classes }) {
  return (
    <AppBar position='relative'>
      <Toolbar className={classes.footer}>
        <div>
          <i className='fa fa-twitter' aria-hidden='true'></i>
          <i className='fa fa-facebook' aria-hidden='true'></i>
        </div>
        <div className={classes.foot}>&copy; Afrilearn.All Rights Reserved</div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Footer);
