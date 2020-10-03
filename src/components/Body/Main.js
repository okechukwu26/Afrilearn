import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  contain: {
    textAlign: 'center',
  },
  learn: {
    background: 'red',
    borderRadius: '50%',
    width: '10%',
    margin: 'auto',
    padding: '0',
  },
  grid: {
    display: 'flex',
  },
});

const Main = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.contain}>
      <Grid item xs={6} sm={4}>
        <div className={classes.grid}>
          <div className={classes.learn}>
            <i className='fa fa-laptop fa-2x' aria-hidden='true'></i>
          </div>
          <p>Learn Anything Online</p>
        </div>
      </Grid>
      <Grid item xs={6} sm={4}>
        hello
      </Grid>
      <Grid item xs={6} sm={4}>
        hello
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Main);
