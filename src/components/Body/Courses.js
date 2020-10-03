import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import lib from '../../images/met.jpg';
import back from '../../images/back.jpg';
import av from '../../images/lap.jpg';
import bran from '../../images/pencil.jpg';
import pep from '../../images/pep.jpg';
import draw from '../../images/draw.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const style = (theme) => ({
  media: {
    height: '20rem',
    objectFit: 'contain',
    width: '30rem',
    [theme.breakpoints.down('md')]: {
      height: '10rem',
      overflow: 'hidden',
    },
  },
  card: {
    margin: '0 3rem',
    marginBottom: '3rem',
    overflow: 'hiddden',
    [theme.breakpoints.down('md')]: {
      margin: '.4rem 1rem',
      overflow: 'hidden',
    },
  },

  font: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'auto',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      overflow: 'hidden',
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
      overflow: 'hidden',
    },
  },
  head: {
    textAlign: 'center',
    fontSize: '2rem',
    overflow: 'hiddden',
    fontFamily: 'auto',
    fontWeight: 'bold',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem 0',
  },
  img: {
    width: '10rem',
  },
  cont: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('xs')]: {},
  },
});

const Courses = ({ classes }) => {
  return (
    <>
      <Typography variant='h2' className={classes.head}>
        Popular Courses
      </Typography>
      <Grid container className={classes.cont}>
        <Grid item xs={5} sm={3} md={4} className={classes.grid}>
          <Card>
            <CardActionArea>
              <CardMedia image={lib} className={classes.media} />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem{' '}
                  <span>
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
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5} sm={3} md={4} className={classes.grid}>
          <Card>
            <CardActionArea>
              <CardMedia image={back} className={classes.media} />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem{' '}
                  <span>
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
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5} sm={3} md={4} className={classes.grid}>
          <Card>
            <CardActionArea>
              <CardMedia image={bran} className={classes.media} />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem{' '}
                  <span>
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
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5} sm={3} md={4} className={classes.grid}>
          <Card>
            <CardActionArea>
              <CardMedia image={av} className={classes.media} />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem
                  <span>
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
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5} sm={3} md={4} className={classes.grid}>
          <Card>
            <CardActionArea>
              <CardMedia image={pep} className={classes.media} />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem{' '}
                  <span>
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
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={5} sm={3} md={4} className={classes.grid}>
          <Card>
            <CardActionArea>
              <CardMedia image={draw} className={classes.media} />
              <CardContent>
                <Typography variant='h3' className={classes.font}>
                  Lorem ipsum dolor sit
                </Typography>
                <Typography variant='h3' className={classes.fan}>
                  Lorem{' '}
                  <span>
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
                  </span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(style)(Courses);
