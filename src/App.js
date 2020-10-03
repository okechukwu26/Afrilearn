import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import LearnContext from './context';

import axios from 'axios';

//pages
import Home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';
import Dashboard from './pages/Dashboard';

axios.defaults.baseURL =
  'https://europe-west1-your-mind-d6382.cloudfunctions.net/api';

class App extends Component {
  state = {
    token: null,
  };
  login = (token) => {
    this.setState({ token: token });
  };
  logout = () => {
    this.setState({ token: null });
  };
  render() {
    return (
      <>
        <Router>
          <LearnContext.Provider
            value={{ token: this.state.token, login: this.login }}
          >
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />

              <Route exact path='/signup' component={signup} />

              <Route exact path='/login' component={login} />

              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </LearnContext.Provider>
        </Router>
      </>
    );
  }
}

export default App;
