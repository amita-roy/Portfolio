import React, { Component } from 'react';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import Projects from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="h-screen" id="app">
        <Nav />
        <Header />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
