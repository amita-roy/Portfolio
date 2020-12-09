import React, { Component } from 'react';

class Skill extends Component {
  capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  render() {
    const { type, skills } = this.props;
    return (
      <div className="mb-4 md:mb-6 border-b">
        <h3 className="text-lg font-bold font-display">
          {this.capitalize(type)}
        </h3>
        <div className="flex mt-4 mb-4 flex-wrap">
          {skills.map((skill) => (
            <div className="text-grayLight text-sm mr-4" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skill;
