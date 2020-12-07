import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from '../Button';
import { Tag } from '../Tag';
import styles from './Card.module.css';

class Card extends Component {
  render() {
    const cardClasses = classNames(
      'lg:p-10',
      'p-4',
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
    const { title, background, tags } = this.props;
    const tagListLight = tags.map((tag) => (
      <Tag color="primaryLight">{tag}</Tag>
    ));
    const tagListDark = tags.map((tag) => (
      <Tag color="secondaryLight">{tag}</Tag>
    ));
    return (
      <div>
        <div
          className={`${cardClasses} ${styles.Card}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 98.35%), url(${background})`,
          }}
        >
          <div>
            <p className="text-2xl lg:text-3xl font-display font-extrabold text-white mb-3">
              {title}
            </p>
            <div className={`${styles.Tags} ${styles.Element}`}>
              {tagListLight}
            </div>
          </div>
          <div className={`${styles.Button} ${styles.Element}`}>
            <Button onClick={this.props.openModal}>See the project</Button>
          </div>
        </div>

        <div className={styles.smallScreenTags}>{tagListDark}</div>

        <div className={styles.smallScreenButton}>
          <Button onClick={this.props.openModal}>See the project</Button>
        </div>
      </div>
    );
  }
}

export default Card;
