import React, { useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LearnContext from '../../context';
import axios from 'axios';
const auth = localStorage.getItem('token');

const styles = (theme) => ({
  mod: {
    [theme.breakpoints.up('md')]: {
      transform: 'translateX(100%)',
    },
    transform: 'translateX(100%)',
    width: '20rem',
    position: 'fixed',
    top: '0',
    right: '0',
    zIndex: '3000',
    background: '#1e0623',
    height: '100vh',
    margin: '0',
    transition: 'all .5s linear',
  },
  open: {
    [theme.breakpoints.up('md')]: {
      transform: 'translateX(100%)',
    },

    width: '20rem',
    position: 'fixed',
    top: '0',
    right: '0',
    zIndex: '3000',
    background: '#1e0623',
    height: '100vh',
    margin: '0',
    transition: 'all .5s ease-in-out',
  },
  closing: {
    color: '#fff',
    cursor: 'pointer',
    marginBottom: '2rem',
  },
  navlink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'blue',
  },
  btn: {
    fontSize: '.7rem',
    marginRight: '.5rem',
  },
  sid: {
    fontSize: '1rem',
    width: '100%',
    color: '#fff',
    ' & :hover': {
      border: '1px solid #776363',
      background: '#3e2333',
      borderRadius: '3px',
      width: '100%',
      transition: 'all .5s linear',
    },
  },
});

const SideBar = ({ open, classes, close, history }) => {
  const { token } = useContext(LearnContext);
  let className;
  if (open) {
    className = classes.open;
  } else {
    className = classes.mod;
  }
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    history.push('/');
  };

  return (
    <Card>
      <div className={className}>
        <i
          className={`${classes.closing} fa fa-times fa-2x`}
          aria-hidden='true'
          onClick={close}
        ></i>
        <div className={classes.navlink}>
          <Button
            component={NavLink}
            to='/ABOUT'
            className={classes.sid}
            onClick={close}
          >
            About
          </Button>
          <Button
            component={NavLink}
            to='/faq'
            className={classes.sid}
            onClick={close}
          >
            FAQ
          </Button>
          <Button
            component={NavLink}
            to='/blog'
            className={classes.sid}
            onClick={close}
          >
            BLOG
          </Button>
          <Button
            component={NavLink}
            to='/forum'
            className={classes.sid}
            onClick={close}
          >
            FORUM
          </Button>
          <Button
            component={NavLink}
            to='/contact'
            className={classes.sid}
            onClick={close}
          >
            CONTACT
          </Button>
          {!token ||
            (auth && (
              <Button
                component={NavLink}
                to='/login'
                className={classes.sid}
                onClick={close}
              >
                <i className='fa fa-sign-in' aria-hidden='true'></i>
                Login
              </Button>
            ))}
          {!token ||
            (auth && (
              <Button
                component={NavLink}
                to='/signup'
                className={classes.sid}
                onClick={close}
              >
                <i className='fa fa-user-plus' aria-hidden='true'></i>
                Signup
              </Button>
            ))}
          {token ||
            (auth && (
              <Button
                component={NavLink}
                to='/dashboard'
                className={classes.sid}
                onClick={close}
              >
                Dashboard
              </Button>
            ))}
          {token ||
            (auth && (
              <Button className={classes.navlink} onClick={logout}>
                logout
              </Button>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default withStyles(styles)(SideBar);
