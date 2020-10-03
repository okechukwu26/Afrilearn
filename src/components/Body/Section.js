import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typograhy from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const styles = (theme) => ({
  section: {
    margin: '2rem 10rem',
    [theme.breakpoints.down('md')]: {
      margin: '1rem 5rem',
    },
  },
  sect: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'auto',
    marginTop: 'revert',
    fontSize: '3rem',
    margin: 'auto',
    textAlign: 'center',
  },
  span: {
    [theme.breakpoints.down('md')]: {
      margin: '1rem 0',
    },
    textAlign: 'center',
    margin: '1rem 10rem',
    color: '#d0c1c1',
  },
});
const Section = (props) => {
  const { classes } = props;
  return (
    <div className={classes.section}>
      <Typograhy variant='h3' className={classes.sect}>
        Welcome to Afrilearn E-Learning
      </Typograhy>
      <CardContent>
        <Typograhy variant='body1' className={classes.span}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil vel
          laboriosam modi beatae voluptatum, molestiae adipisci corrupti sit
          numquam quos? Corrupti fugit eius ipsa cumque optio vero quisquam
          impedit expedita.
        </Typograhy>
      </CardContent>
    </div>
  );
};

export default withStyles(styles)(Section);
