import React, { Component } from 'react';
import data from '../data/data.json';
import { Card } from './Card';
import { Modal } from './Modal';

class Projects extends Component {
  state = {
    isModalOpen: false,
    project: null,
  };

  onOpenModal = (project) => {
    this.setState({ isModalOpen: true, project });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false, project: null });
  };

  render() {
    const topProjects = data
      .slice(0, 2)
      .map((project) => (
        <Card openModal={this.onOpenModal} project={project} />
      ));
    const bottomProjects = data
      .slice(2, data.length)
      .map((project) => (
        <Card openModal={this.onOpenModal} project={project} />
      ));
    return (
      <div className="mt-10 md:mt-40 md:px-20 px-4" id="portfolio">
        <h2 className="text-3xl font-display font-extrabold">My best works</h2>
        <div className="mt-10">
          <div className="grid md:grid-cols-2 gap-10">{topProjects}</div>
          <div className="grid lg:grid-cols-3 gap-10 mt-10">
            {bottomProjects}
          </div>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.onCloseModal}
          project={this.state.project}
        />
      </div>
    );
  }
}

export default Projects;
