import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class Modal extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
      >
        <div>I am a modal</div>
      </ReactModal>
    );
  }
}

export default Modal;
