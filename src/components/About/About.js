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
            Well-organised person, problem solver, a person with high attention
            to detail. There’s nothing I enjoy more developing good websites for
            nice people. While I’ll never be perfect, I do my best to come
            close.
          </p>
          <p className=" w-full md:max-w-lg my-8 text-grayLight font-normal leading-7">
            Look through some of my work and experience! If you’ve got a project
            you’d like to work on with me just get in touch and we can get to
            work!
          </p>
          <Button href="https://github.com/Amita-Roy/Resume">
            Get my resume
          </Button>
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
