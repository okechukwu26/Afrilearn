import React, { Component } from 'react';
import JWT from 'jwt-decode';
import axios from 'axios';

const token = localStorage.token;
export default class Dashboard extends Component {
  componentDidMount() {
    setTimeout(this.props.history.push('/dashboard'), 1000);
    if (token) {
      const decode = JWT(token);
      console.log(decode);
      if (decode.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
        this.props.history.push('/');
      } else {
        axios.defaults.headers.common['Authorization'] = token;
      }
    }
  }
  render() {
    return <div>hello</div>;
  }
}
