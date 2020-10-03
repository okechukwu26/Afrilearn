import React, { Component } from 'react';
import back from '../images/av.jpg';

import { Link } from 'react-router-dom';
import LearnContext from '../context';

import InputAdornment from '@material-ui/core/InputAdornment';

import EmailIcon from '@material-ui/icons/Email';

import VpnKeyIcon from '@material-ui/icons/VpnKey';

import PeopleIcon from '@material-ui/icons/People';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
const styles = (theme) => ({
  back: {
    background: '#fff',
    backgroundImage: `url(${back})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
  },
  form: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  textField: {
    margin: '1rem 0',
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      margin: '1rem',
    },
  },
  general: {
    color: 'red',
  },
  progress: {
    position: 'absolute',
    color: '#dbdce5',
  },
  sign: {
    color: '#',
  },
  span: {
    padding: '1rem',
    fontSize: '1rem',
  },
  link: {
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'none',
    },
  },
  pep: {
    fontSize: '5rem',
    textAlign: 'center',
    margin: '2rem 10rem',
  },
});
class login extends Component {
  static contextType = LearnContext;
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      loading: false,
    };
  }
  isActive = true;

  onSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.isActive) {
      this.setState({ loading: true });
    }
    try {
      const res = await axios.post(
        'https://europe-west1-your-mind-d6382.cloudfunctions.net/api/login',
        newUserData
      );
      this.setAuth(res.data.idToken);
      this.setState({ loading: false });
      this.context.login(res.data.idToken);
      this.props.history.push('/dashboard');
    } catch (error) {
      this.setState({ errors: error.response.data, loading: false });
    }
    // try {
    //   const res = await fetch('/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(newUserData),
    //   });
    //   if (res.status !== 200) {
    //     const error = await res.json();
    //     if (this.isActive) {
    //       this.setState({ errors: error, loading: false });
    //     }
    //   }
    //   if (res.status === 200) {
    //     const data = await res.json();
    //     console.log(data, this.props);
    //     this.setAuth(data.idToken);
    //     if (this.isActive) {
    //       this.setState({ loading: false });
    //       this.props.history.push('/dashboard');
    //     }
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  };
  setAuth = (token) => {
    localStorage.setItem('token', token);
    const FbIdToken = `Bearer ${token}`;
    axios.defaults.headers.common['Authorization'] = FbIdToken;
  };
  handleChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    this.setState({
      [id]: value,
    });
  };
  componentWillUnmount() {
    this.isActive = false;
  }
  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <Grid container className={classes.back}>
        <Grid item sm>
          {/* <img src={back} alt='back' /> */}
        </Grid>
        <Grid item sm>
          <>
            <PeopleIcon className={classes.pep} />
            <form
              className={classes.form}
              noValidate
              autoComplete='off'
              onSubmit={this.onSubmit}
            >
              <TextField
                type='email'
                id='email'
                label='Email'
                fullWidth
                color='secondary'
                helperText={errors.email}
                value={this.state.email}
                error={errors.email ? true : false}
                className={classes.textField}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type='password'
                id='password'
                label='password'
                helperText={errors.password}
                error={errors.password ? true : false}
                fullWidth
                value={this.state.password}
                color='secondary'
                className={classes.textField}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <VpnKeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {errors.general && (
                <Typography variant='body2' className={classes.general}>
                  {errors.general}
                </Typography>
              )}
              <Button type='submit' variant='contained' color='primary'>
                LOGIN
                {this.state.loading && (
                  <CircularProgress size={30} className={classes.progess} />
                )}
              </Button>
              <br></br>
              <p className={classes.span}>
                Don't have an account ? signup{' '}
                <Link to='/signup' className={classes.link}>
                  here
                </Link>
              </p>
            </form>
          </>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}
export default withStyles(styles)(login);
