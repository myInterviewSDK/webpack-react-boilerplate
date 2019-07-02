import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import MyInterviewWidget from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <MyInterviewWidget title="Hello from React webpack" />;
  }
}

export default hot(module)(App);
