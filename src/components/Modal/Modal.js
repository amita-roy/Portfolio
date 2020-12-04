import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { Thumbnail } from '../Thumbnail';
import styles from './Modal.module.css';

ReactModal.setAppElement('#root');

class Modal extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        className={`relative ${styles.Modal}`}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.HeroImage}></div>
        <div className="py-4 px-6">
          <div className="topContent md:flex md:justify-between mt-2 md:mt-3">
            <div className="thumbnails flex justify-between">
              <Thumbnail />

              <Thumbnail />

              <Thumbnail />
            </div>
            <div className="buttonLinks flex flex-col mt-4 md:mt-0 ">
              <Button href="/">
                <div className="relative">
                  <p>See live</p>

                  <svg
                    className="absolute top-1 -right-2"
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4545 1H1V17H17V8.27273"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path d="M17 1L5 13" stroke="white" strokeWidth="2" />
                    <path
                      d="M12.6364 1H17V5.36364"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </Button>
              <span className="mb-4"></span>
              <Button href="/">
                <div className="relative">
                  <p className="pr-6">See source</p>

                  <svg
                    className="absolute top-0 -right-2"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.5001 0C5.1496 0 0 5.04943 0 11.2785C0 16.2616 3.29513 20.4893 7.86447 21.9806C8.43921 22.085 8.65021 21.736 8.65021 21.4381C8.65021 21.1691 8.63954 20.2807 8.63459 19.3382C5.43526 20.0205 4.76016 18.0075 4.76016 18.0075C4.23703 16.7039 3.48328 16.3572 3.48328 16.3572C2.43988 15.6572 3.56193 15.6716 3.56193 15.6716C4.71674 15.7512 5.3248 16.8339 5.3248 16.8339C6.35049 18.5581 8.0151 18.0596 8.67135 17.7714C8.77456 17.0425 9.0726 16.5449 9.40148 16.2633C6.84715 15.9781 4.162 15.011 4.162 10.6894C4.162 9.45807 4.61124 8.45196 5.34689 7.66212C5.22749 7.37805 4.83386 6.23092 5.4583 4.67739C5.4583 4.67739 6.424 4.37427 8.62164 5.83348C9.53898 5.58359 10.5228 5.45827 11.5001 5.45397C12.4774 5.45827 13.462 5.58359 14.381 5.83348C16.576 4.37427 17.5404 4.67739 17.5404 4.67739C18.1663 6.23092 17.7725 7.37805 17.6531 7.66212C18.3905 8.45196 18.8367 9.45807 18.8367 10.6894C18.8367 15.0213 16.1464 15.9751 13.5856 16.2543C13.9981 16.6043 14.3656 17.2907 14.3656 18.343C14.3656 19.852 14.3523 21.0666 14.3523 21.4381C14.3523 21.7382 14.5593 22.0899 15.1422 21.9791C19.7091 20.4861 23 16.2599 23 11.2785C23 5.04943 17.8512 0 11.5001 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
          <div className="bottomContent mt-6">
            <h3 className="font-display text-xl md:text-3xl font-extrabold text-secondary">
              My Project
            </h3>
            <div className="mt-2 mb-3 md:mb-5 flex flex-wrap">
              <Tag>Javascript</Tag>
              <Tag>HTML/CSS</Tag>
              <Tag>Ruby on Rails</Tag>
            </div>
            <p className="text-grayLight text-sm font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <button
          className="h-10 bg-primary p-2 text-white absolute top-0 right-0 focus:outline-none"
          onClick={onClose}
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
