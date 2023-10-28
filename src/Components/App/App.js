import React, { useState } from 'react';
import { HomePage } from '../HomePage/HomePage';
import { PageHeader } from '../PageHeader/PageHeader';
import { Contact } from '../Contact/Contact';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { FunAbout } from '../FunAbout/FunAbout';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const App = () => {

  return (
    <>
      <div className="section" data-anchor="home">
        <PageHeader />
        <HomePage />
        <Contact />
      </div>
      <div className="section" data-anchor="about">
        <PageHeader />
        <About />
        <Contact />
      </div>
      <div className="section" data-anchor="projects">
        <PageHeader />
        <Projects />
        <Contact />
      </div>
      <div className="section" data-anchor="fun">
        <PageHeader />
        <FunAbout />
        <Contact />
      </div>
    </>
  );
};

export default App;
