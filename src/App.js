import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="bg-body px-20 h-screen">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
