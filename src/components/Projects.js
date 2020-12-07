import React, { Component } from 'react';
import { Card } from './Card';
import anyImage from '../images/test.jpg';
import { Modal } from './Modal';

class Projects extends Component {
  state = {
    isModalOpen: false,
  };

  onOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div className="mt-10 md:mt-60 md:px-20 px-4" id="portfolio">
        <h2 className="text-3xl font-display font-extrabold">My best works</h2>
        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-10">
            <Card
              title="My Project"
              background={anyImage}
              openModal={this.onOpenModal}
            />
            <Card
              title="My Project"
              openModal={this.onOpenModal}
              background={anyImage}
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            <Card
              title="My Project"
              openModal={this.onOpenModal}
              background={anyImage}
            />
            <Card
              title="My Project"
              openModal={this.onOpenModal}
              background={anyImage}
            />
            <Card
              title="My Project"
              openModal={this.onOpenModal}
              background={anyImage}
            />
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={this.onCloseModal} />
      </div>
    );
  }
}

export default Projects;
