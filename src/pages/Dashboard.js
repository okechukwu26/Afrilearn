import React, { Component } from 'react';

export default class Dashboard extends Component {
  componentDidMount() {
    setTimeout(this.props.history.push('/dashboard'), 1000);
  }
  render() {
    return <div>hello</div>;
  }
}
