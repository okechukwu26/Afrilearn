import React from 'react';
import back from '../images/girl.jpg';
import withStyles from '@material-ui/core/styles/withStyles';
import Typograhy from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Section from '../components/Body/Section';
import Main from '../components/Body/Main';

const styles = (theme) => ({
  back: {
    [theme.breakpoints.down('md')]: {
      height: '20rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '10rem',
    },
    backgroundImage: `url(${back})`,
    height: '30rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: ' no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    flexDirection: 'column',
  },
  para: {
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    color: '#39395e',
    fontWeight: 'bold',
    fontFamily: 'auto',
    marginTop: 'revert',
  },
  span: {
    [theme.breakpoints.down('md')]: {
      margin: '1rem 5rem',
      fontSize: '.6rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '.5rem 2rem',
      fontSize: '.6rem',
    },

    textAlign: 'center',
    color: '##754d4d',
    margin: '2rem 20rem',
    fontSize: '1rem',
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  start: {
    [theme.breakpoints.down('md')]: {
      padding: ' 4px',
      marginLeft: '1rem',
      fontSize: '.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '1rem',
      fontSize: '.7rem',
      padding: '4px ',
    },
    marginLeft: '2rem',
  },
});

function Home(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.back}>
        <Typograhy variant='h3' className={classes.para}>
          Learning Online Becomes Easier{' '}
        </Typograhy>

        <Typograhy variant='body2' className={classes.span}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          dignissimos facere laudantium necessitatibus, nam aliquid nemo maxime
          sed velit sequi. Iusto veritatis unde cumque nam quod dicta
          necessitatibus recusandae temporibus?
        </Typograhy>
        <div>
          <Button variant='contained' color='primary' className={classes.start}>
            Get Started Now
          </Button>
          <Button variant='contained' color='default' className={classes.start}>
            Take a Tour
          </Button>
        </div>
      </div>
      <Section />
      <Main />
    </>
  );
}

export default withStyles(styles)(Home);
