import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main />
      </Fragment>
    );
  }
}

export default App;
