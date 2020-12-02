import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Tag } from '../Tag';
// import styles from './Card.module.css';

class Card extends Component {
  render() {
    const cardClasses = classNames(
      'p-12',
      'flex',
      'flex-col',
      'justify-between',
      'h-80',
      'shadow-md',
      'hover:shadow-2xl',
      'cursor-pointer',
      // 'bg-any-image',
      'bg-cover',
      'bg-center',
      'bg-no-repeat'
    );
    const { title, href, background } = this.props;
    return (
      <div
        className={cardClasses}
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.2), rgba(0,0,0,0.1)), url(${background})`,
        }}
      >
        <div>
          <p className="text-3xl font-display font-extrabold text-white mb-3">
            {title}
          </p>
          <div className="flex">
            <Tag>Javascript</Tag>
          </div>
        </div>
        <div>
          <Button href={href}>See the project</Button>
        </div>
      </div>
    );
  }
}

export default Card;
