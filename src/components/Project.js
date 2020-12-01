import React, { Component } from 'react';
import classNames from 'classnames';

class Project extends Component {
  render() {
    const cardClasses = classNames(
      'card border-2',
      'border-red-400',
      'h-80',
      'shadow-md',
      'hover:shadow-2xl',
      'cursor-pointer'
    );
    return (
      <div className="mt-20">
        <h2 className="text-3xl font-display font-extrabold">My best works</h2>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-10">
            <div className={cardClasses}></div>
            <div className={cardClasses}></div>
          </div>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className={cardClasses}></div>
            <div className={cardClasses}></div>
            <div className={cardClasses}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
