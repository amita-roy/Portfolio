import React, { Component } from 'react';
import { Button } from '../Button';
import { Skill } from '../Skill';

class About extends Component {
  render() {
    const languages = ['JavaScript (ES5/ES6)', 'Ruby', 'HTML', 'CSS'];
    const frameworks = [
      'Bootstrap',
      'Ruby on Rails',
      'RSpec',
      'Capybara',
      'Selenium',
    ];
    const skills = [
      'Bootstrap',
      'Bulma',
      'Codekit',
      'Codepen',
      'Github',
      'Gitlab',
      'Terminal',
    ];
    return (
      <div className="h-96 mt-40 flex">
        <div className="h-full w-1/2">
          <h2 className="text-3xl font-display font-extrabold">About Me</h2>
          <p className="max-w-lg my-8">
            In three sentences describe who you are as a proffessional. Look
            through some of my work and experience! If you like what you see and
            have project you need coded, don’t hesistate to contact me.
          </p>
          <Button>Get my resume</Button>
        </div>
        <div className="h-full w-1/2">
          <Skill type="languages" skills={languages} />
          <Skill type="frameworks" skills={frameworks} />
          <Skill type="skills" skills={skills} />
        </div>
      </div>
    );
  }
}

export default About;
