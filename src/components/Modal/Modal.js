import React, { Component } from 'react';
import ReactModal from 'react-modal';
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
        <div className={`h-1/2 ${styles.topImage}`}></div>
        <div className="h-1/2 py-3 px-5">
          <div className="topContent flex  justify-between mt-3">
            <div className="thumbnails flex">
              <div className="h-10 w-16 border bg-purple-800"></div>
              <div className="h-10 w-16 border bg-purple-800 ml-3"></div>
              <div className="h-10 w-16 border bg-purple-800 ml-3"></div>
            </div>
            <div className="buttonLinks flex flex-col">
              <button className=" block bg-primary py-2 text-white px-6 mb-4 text-sm">
                See live
              </button>
              <button className=" block bg-primary py-2 text-white px-6 text-sm">
                See source
              </button>
            </div>
          </div>
          <div className="bottomContent">
            <h3 className="font-display text-3xl font-extrabold text-secondary">
              My Project
            </h3>
            <div className="tags mt-2 mb-5">
              <span className="mr-2">Tags</span>
              <span className="mr-2">Tags</span>
              <span className="mr-2">Tags</span>
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
            className={styles.cross}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </ReactModal>
    );
  }
}

export default Modal;
