import React, { Component } from 'react';
import { Button } from '../Button';
import { Skill } from '../Skill';
import {
  frontEnd,
  backEnd,
  otherSkills,
  professional,
} from '../../data/skills';

class About extends Component {
  render() {
    return (
      <div
        className="mt-10 md:mt-20 md:flex md:px-20 px-4 mb-10 md:mb-0"
        id="about"
      >
        <div className="md:h-full md:w-1/2 md:pr-6">
          <h2 className="text-3xl font-display font-extrabold">About Me</h2>
          <p className=" w-full md:max-w-lg my-8 text-grayLight font-normal leading-7">
            From being an HR(Human resource) professional to software developer.
            I left my job in December 2018 and started learning programming. It
            gives me immense pleasure to solve real life problems with my code
            and it helped me improving my logical thinking as well.
          </p>
          <p className=" w-full md:max-w-lg my-8 text-grayLight font-normal leading-7">
            Look through some of my work and experience! If you like what you
            see and have project you need coded, don’t hesistate to contact me.
          </p>
          <Button>Get my resume</Button>
        </div>
        <div className="md:h-full md:w-1/2 mt-8 md:mt-0">
          <Skill type="Front-End" skills={frontEnd} />
          <Skill type="Back-End" skills={backEnd} />
          <Skill type="Other Skills" skills={otherSkills} />
          <Skill type="Professional" skills={professional} />
        </div>
      </div>
    );
  }
}

export default About;
