import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SideBar from './SideBar';

const styles = (theme) => ({
  nav: {
    background: '#f1f1f1',
  },
  head: {
    fontFamily: "Lato,'Open Sans',Roboto,sans-serif",
    color: '#2bb58e',
    textDecoration: 'none',
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  para: {
    margin: 'auto',
    color: '#2bb58e',
  },
  icn: {
    cursor: 'pointer',
    color: '#1e0623',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  navlink: {
    fontSize: '.7rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  btn: {
    fontSize: '.7rem',
    marginRight: '.5rem',
  },
});
const token = localStorage.getItem('token');
const Nav = (props) => {
  // const context = useContext(LearnContext);
  const [open, modalOpen] = useState(false);

  const Modal = () => {
    modalOpen(!open);
  };
  const ModalClose = () => {
    modalOpen(!open);
  };
  const logout = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  const { classes } = props;
  return (
    <>
      <AppBar position='sticky' className={classes.nav}>
        <Toolbar className={classes.tool}>
          <Typography variant='h4'>
            <Link to='/' className={classes.head}>
              Afrilearn
            </Link>
          </Typography>
          <div className={classes.navlink}>
            <Button component={NavLink} to='/ABOUT' className={classes.navlink}>
              About
            </Button>
            <Button component={NavLink} to='/faq' className={classes.navlink}>
              FAQ
            </Button>
            <Button component={NavLink} to='/blog' className={classes.navlink}>
              BLOG
            </Button>
            <Button component={NavLink} to='/forum' className={classes.navlink}>
              FORUM
            </Button>
            <Button
              component={NavLink}
              to='/contact'
              className={classes.navlink}
            >
              CONTACT
            </Button>
            {!token && (
              <Button
                variant='contained'
                color='primary'
                component={NavLink}
                to='/login'
                className={classes.btn}
              >
                <i className='fa fa-sign-in' aria-hidden='true'></i>
                Login
              </Button>
            )}
            {!token && (
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/signup'
                className={classes.btn}
              >
                <i className='fa fa-user-plus' aria-hidden='true'></i>
                Signup
              </Button>
            )}
            {token && (
              <Button
                component={Link}
                to='/dashboard'
                className={classes.navlink}
              >
                Dashboard
              </Button>
            )}
            {token && (
              <Button className={classes.navlink} onClick={logout}>
                logout
              </Button>
            )}
          </div>
          <i
            className={`${classes.icn} fa fa-bars fa-2x`}
            aria-hidden='true'
            onClick={Modal}
          ></i>
        </Toolbar>
      </AppBar>
      <SideBar open={open} close={ModalClose} />
    </>
  );
};

export default withStyles(styles)(withRouter(Nav));
