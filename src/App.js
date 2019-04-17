import React, { Component, Fragment } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Main from './components/main';
import SectionTwo from './components/section-two';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Main />
        <SectionTwo />
        <Projects />
      </Fragment>
    );
  }
}

export default App;
