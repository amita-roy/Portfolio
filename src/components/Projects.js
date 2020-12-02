import React, { Component } from 'react';
import { Card } from './Card';
import anyImage from '../images/test.jpg';
class Projects extends Component {
  render() {
    return (
      <div className="mt-20 px-20">
        <h2 className="text-3xl font-display font-extrabold">My best works</h2>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-10">
            <Card title="My Project" background={anyImage} />
            <Card title="My Project" />
          </div>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <Card title="My Project" />
            <Card title="My Project" />
            <Card title="My Project" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
