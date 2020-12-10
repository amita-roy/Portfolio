import React, { Component } from 'react';

class Skill extends Component {
  render() {
    const { type, skills } = this.props;
    return (
      <div className="mb-4 md:mb-6 border-b">
        <h3 className="text-lg font-bold font-display">{type}</h3>
        <div className="flex mt-4 mb-4 flex-wrap">
          {skills.map((skill) => (
            <div className="text-grayLight text-sm mr-4 mb-2" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skill;
