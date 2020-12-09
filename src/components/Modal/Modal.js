import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Thumbnail } from '../Thumbnail';
import { ReactComponent as Expand } from '../../icons/expand.svg';
import { ReactComponent as Github } from '../../icons/githubLight.svg';
import styles from './Modal.module.css';

ReactModal.setAppElement('#root');

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  onThumbnailClick = (index) => {
    this.setState({ index });
  };

  onModelClose = () => {
    this.setState({ index: 0 });
    this.props.onClose();
  };

  render() {
    const { isOpen, project } = this.props;
    if (!project) {
      return null;
    }
    const tagList = project.tags.map((tag) => (
      <Tag color="secondaryLight">{tag}</Tag>
    ));

    const thumbnails = project.thumbnails.map((thumbnail, index) => (
      <Thumbnail
        index={index}
        background={thumbnail}
        onClick={() => this.onThumbnailClick(index)}
        isActive={this.state.index}
      />
    ));
    const heroSource = project.thumbnails[this.state.index];
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={this.onModelClose}
        contentLabel="Example Modal"
        className={`relative ${styles.Modal}`}
        overlayClassName={styles.Overlay}
      >
        <div
          className={styles.HeroImage}
          style={{
            backgroundImage: `url(${heroSource})`,
          }}
        ></div>
        <div className="py-4 px-6">
          <div className="topContent md:flex md:justify-between mt-2 md:mt-3">
            <div className="thumbnails flex justify-between">{thumbnails}</div>
            <div className="buttonLinks flex flex-col mt-4 md:mt-0 ">
              <Button href={project.live}>
                <div className="relative">
                  <p>See live</p>
                  <Expand
                    width="16"
                    height="16"
                    className="absolute top-1 -right-2"
                  />
                </div>
              </Button>
              <span className="mb-4"></span>
              <Button href={project.repository}>
                <div className="relative">
                  <p className="pr-6">See source</p>
                  <Github
                    className="absolute top-0 -right-2"
                    width="23"
                    height="22"
                  />
                </div>
              </Button>
            </div>
          </div>
          <div className="bottomContent mt-6">
            <h3 className="font-display text-xl md:text-3xl font-extrabold text-secondary">
              {project.title}
            </h3>
            <div className="mt-2 mb-3 md:mb-5 flex flex-wrap">{tagList}</div>
            <p className="text-grayLight text-sm font-normal">
              {project.description}
            </p>
          </div>
        </div>
        <button
          className="h-10 bg-primary p-2 text-white absolute top-0 right-0 focus:outline-none"
          onClick={this.onModelClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.Close}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </ReactModal>
    );
  }
}

export default Modal;
