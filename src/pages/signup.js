import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import LearnContext from '../context';

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import axios from 'axios';

// import PeopleIcon from '@material-ui/icons/People';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import PeopleIcon from '@material-ui/icons/People';

const styles = (theme) => ({
  back: {
    background: '#8b8181',
    // backgroundImage: `url(${back})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center center',
  },
  form: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  textField: {
    margin: '1rem 0',
    color: '#fff',

    '& label': {
      color: '#fff',
      fontSize: '1.3rem',
      fontWeight: 'bolder',
      transition: 'all .5s linear',
    },
    '& input': {
      color: '#012544',
      fontWeight: 'bolder',
      fontSize: '1.3rem',
    },
    [theme.breakpoints.down('md')]: {
      margin: '1rem',
    },
  },
  sign: {
    color: '#',
  },
  progress: {
    position: 'absolute',
    color: '#dbdce5',
  },
  pep: {
    fontSize: '5rem',
    textAlign: 'center',
    margin: '2rem 10rem',
  },
  span: {
    padding: '1rem',
    fontSize: '1rem',
  },
  general: {
    color: 'red',
  },
  link: {
    textDecoration: 'none',

    ':hover': {
      textDecoration: 'none',
    },
  },
});
class signup extends Component {
  static contextType = LearnContext;
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      exam: '',
      state: '',
      phone: '',
      errors: {},
      token: '',
      loading: false,
    };
  }
  isActive = true;

  onSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      state: this.state.state,
      exam: this.state.exam,
      phone: this.state.phone,
    };
    if (this.isActive) {
      this.setState({ loading: true });
    }
    try {
      const res = await axios.post(
        'https://europe-west1-your-mind-d6382.cloudfunctions.net/api/signup',
        newUserData
      );
      this.setState({ loading: false });
      this.setAuth(res.data.idToken);
      this.context.login(res.data.idToken);
      this.props.history.push('/dashboard');
    } catch (error) {
      this.setState({ errors: error.response.data, loading: false });
    }
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
                type='text'
                id='firstName'
                label='FirstName'
                fullWidth
                color='secondary'
                helperText={errors.firstName}
                error={errors.firstName ? true : false}
                value={this.state.firstName}
                className={classes.textField}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                type='text'
                id='lastName'
                label='LastName'
                fullWidth
                color='secondary'
                helperText={errors.lastName}
                error={errors.lastName ? true : false}
                className={classes.textField}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type='email'
                id='email'
                label='Email'
                fullWidth
                helperText={errors.email}
                error={errors.email ? true : false}
                className={classes.textField}
                onChange={this.handleChange}
                color='secondary'
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
                color='secondary'
                error={errors.password ? true : false}
                fullWidth
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
              <TextField
                type='password'
                id='confirmPassword'
                label='confirmPassword'
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                fullWidth
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
              <TextField
                type='number'
                id='phone'
                label='Phone No:'
                fullWidth
                helperText={errors.phone}
                className={classes.textField}
                color='secondary'
                error={errors.phone ? true : false}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <PhoneAndroidIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type='text'
                id='state'
                label='State'
                fullWidth
                helperText={errors.state}
                color='secondary'
                error={errors.state ? true : false}
                className={classes.textField}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LocationCityIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                type='text'
                id='exam'
                label='Exam'
                helperText={errors.exam}
                color='secondary'
                error={errors.exam ? true : false}
                fullWidth
                className={classes.textField}
                onChange={this.handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MenuBookIcon />
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
                SIGNUP
                {this.state.loading && (
                  <CircularProgress size={30} className={classes.progess} />
                )}
              </Button>
              <br></br>
              <p className={classes.span}>
                Already have an account ? login{' '}
                <Link to='/login' className={classes.link}>
                  here
                </Link>
              </p>
            </form>
          </>
        </Grid>
        <Grid item sm />
      </Grid>
    );
    //   <form onSubmit={this.onSubmit}>
    //     <div>
    //       <label htmlFor='name'> Name: </label>
    //       <input type='text' id='firstName' onChange={this.handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor='name'> Name: </label>
    //       <input type='text' id='lastName' onChange={this.handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor='name'> email: </label>
    //       <input type='email' id='email' onChange={this.handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor='name'>password :</label>
    //       <input type='password' id='password' onChange={this.handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor='name'> confirmPassword</label>
    //       <input
    //         type='password'
    //         id='confirmPassword'
    //         onChange={this.handleChange}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor='name'>state</label>
    //       <input type='text' id='state' onChange={this.handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor='name'>phone</label>
    //       <input type='number' id='phone' onChange={this.handleChange} />
    //     </div>
    //     <div>
    //       <label htmlFor='name'>exam</label>
    //       <input type='text' id='exam' onChange={this.handleChange} />
    //     </div>
    //     <button>click</button>
    //   </form>
    // );
  }
}
export default withStyles(styles)(signup);
