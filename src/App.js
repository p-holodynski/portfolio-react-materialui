import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Main from './components/main';
import SectionTwo from './components/section-two';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main />
        <SectionTwo />
      </Fragment>
    );
  }
}

export default App;
