import React, { Component } from 'react';
import { Button } from '../Button';

class About extends Component {
  render() {
    return (
      <div className="border-2 border-red-400 h-96 mt-40 flex">
        <div className="border-2 border-green-400 h-full w-1/2">
          <h2 className="text-3xl font-display font-extrabold">About Me</h2>
          <p className="max-w-lg my-8">
            In three sentences describe who you are as a proffessional. Look
            through some of my work and experience! If you like what you see and
            have project you need coded, don’t hesistate to contact me.
          </p>
          <Button>Get my resume</Button>
        </div>
        <div className="border-2 border-green-400 h-full w-1/2"></div>
      </div>
    );
  }
}

export default About;
