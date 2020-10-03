import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Navbar/Nav';

//pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={home} />
            <Route exact path='/signup' component={signup} />
            <Route exact path='/login' component={login} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
