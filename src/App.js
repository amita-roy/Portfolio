import React, { Component } from 'react';
import Nav from './components/Nav';
import { Header } from './components/Header';
import Projects from './components/Projects';
import { About } from './components/About';

class App extends Component {
  render() {
    return (
      <div className="px-20 h-screen">
        <Nav />
        <Header />
        <Projects />
        <About />
      </div>
    );
  }
}

export default App;
