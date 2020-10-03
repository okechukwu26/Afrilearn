import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import lib from '../../images/lib.jpg';
import back from '../../images/met.jpg';
import av from '../../images/pep.jpg';
import bran from '../../images/bran.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const style = (theme) => ({
  media: {
    height: '20rem',
    [theme.breakpoints.down('md')]: {
      height: '10rem',
    },
  },
  card: {
    margin: '0 3rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      margin: '.4rem 1rem',
    },
  },
  grid: {
    margin: '0 3rem',
    [theme.breakpoints.down('md')]: {
      margin: '0 3rem',
    },
  },
  font: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  },
  fan: {
    color: 'grey',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  star: {
    color: '#7d7d06',
    [theme.breakpoints.down('md')]: {
      padding: '0',
    },
  },
  head: {
    textAlign: 'center',
    fontSize: '2rem',
    fontFamily: 'auto',
    fontWeight: 'bold',
  },
});

const Courses = ({ classes }) => {
  return (
    <>
      <CardContent>
        <Typography varaint='h2' className={classes.head}>
          Popular Courses
        </Typography>
      </CardContent>
      <Grid container className={classes.grid}>
        <Grid item xs={4} md={2} className={classes.card}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={lib}
                title='Lorem ipsum dolor sit'
              />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem
                </Typography>
              </CardContent>
              <CardContent>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} md={2} className={classes.card}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={back}
                title='Lorem ipsum dolor sit'
              />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem
                </Typography>
              </CardContent>
              <CardContent>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>{' '}
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>{' '}
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} md={2} className={classes.card}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={av}
                title='Lorem ipsum dolor sit'
              />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem
                </Typography>
              </CardContent>
              <CardContent>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4} md={2} className={classes.card}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={bran}
                title='Lorem ipsum dolor sit'
              />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem
                </Typography>
              </CardContent>
              <CardContent>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
                <i
                  className={`${classes.star} fa fa-star-o`}
                  aria-hidden='true'
                ></i>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(style)(Courses);
