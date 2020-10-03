import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typograpy from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Courses from './Courses';

const styles = (theme) => ({
  contain: {
    textAlign: 'center',
  },
  learn: {
    background: '#f1daf1',
    borderRadius: '50%',
    height: '3rem',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      height: '2rem',
      borderRadius: '50%',
      width: '30px',
      margin: 'auto',
    },
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  icn: {
    fontSize: '2rem',
    textAlign: 'center',
    paddingTop: '.5rem',
    color: '#bd50d2',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  pag: {
    paddingLeft: '1rem',
    fontWeight: 'bold',
    fontFamily: 'auto',
  },
  bod: {
    textAlign: 'center',
    padding: '.5rem',
  },
});

const Main = (props) => {
  const { classes } = props;
  return (
    <>
      <Grid container className={classes.contain}>
        <Grid item xs={6} sm={3}>
          <>
            <div className={classes.grid}>
              <div className={classes.learn}>
                <i
                  className={`${classes.icn} fa fa-laptop fa-2x`}
                  aria-hidden='true'
                ></i>
              </div>
              <Typograpy className={classes.pag}>
                Learn Anything Online
              </Typograpy>
            </div>
            <CardContent>
              <Typograpy variant='body2' className={classes.bod}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                exercitationem et. Officia perspiciatis quia ex, quasi eveniet
                laborum, fuga in animi et distinctio id ipsa ipsum pariatur
                tempora vero molestiae?
              </Typograpy>
            </CardContent>
          </>
        </Grid>
        <Grid item xs={6} sm={3}>
          <>
            <div className={classes.grid}>
              <div className={classes.learn}>
                <i
                  className={`${classes.icn} fa fa-volume-control-phone fa-2x`}
                  aria-hidden='true'
                ></i>
              </div>
              <Typograpy className={classes.pag}> Animations Design</Typograpy>
            </div>
            <CardContent>
              <Typograpy variant='body2' className={classes.bod}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                exercitationem et. Officia perspiciatis quia ex, quasi eveniet
                laborum, fuga in animi et distinctio id ipsa ipsum pariatur
                tempora vero molestiae?
              </Typograpy>
            </CardContent>
          </>
        </Grid>
        <Grid item xs={6} sm={3}>
          <>
            <div className={classes.grid}>
              <div className={classes.learn}>
                <i
                  className={`${classes.icn} fa fa-comment fa-2x`}
                  aria-hidden='true'
                ></i>
              </div>
              <Typograpy className={classes.pag}>Talk to our experts</Typograpy>
            </div>
            <CardContent>
              <Typograpy variant='body2' className={classes.bod}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                exercitationem et. Officia perspiciatis quia ex, quasi eveniet
                laborum, fuga in animi et distinctio id ipsa ipsum pariatur
                tempora vero molestiae?
              </Typograpy>
            </CardContent>
          </>
        </Grid>
        <Grid item xs={6} sm={3}>
          <>
            <div className={classes.grid}>
              <div className={classes.learn}>
                <i
                  className={`${classes.icn} fa fa-calendar fa-2x`}
                  aria-hidden='true'
                ></i>
              </div>
              <Typograpy className={classes.pag}>Latest Events</Typograpy>
            </div>
            <CardContent>
              <Typograpy variant='body2' className={classes.bod}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                exercitationem et. Officia perspiciatis quia ex, quasi eveniet
                laborum, fuga in animi et distinctio id ipsa ipsum pariatur
                tempora vero molestiae?
              </Typograpy>
            </CardContent>
          </>
        </Grid>
      </Grid>
      <Courses />
    </>
  );
};

export default withStyles(styles)(Main);
