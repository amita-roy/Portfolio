import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import ProJect from './components/Project';

class App extends Component {
  render() {
    return (
      <div className="px-20 h-screen">
        <Nav />
        <Header />
        <ProJect />
      </div>
    );
  }
}

export default App;
