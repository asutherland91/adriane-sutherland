import React, { useState } from 'react';
import { HomePage } from '../HomePage/HomePage';
import { PageHeader } from '../PageHeader/PageHeader';
import { Contact } from '../Contact/Contact';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { FunAbout } from '../FunAbout/FunAbout';
import Modal from "react-modal";
// import { Route, Switch, Redirect } from 'react-router-dom';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage'
import './App.css';

Modal.setAppElement('#root');

const App = () => {
  const options = {
    sectionClassName: 'section',
    anchors: ['homepage', 'about', 'projects', 'funabout'],
    scrollBar: false,
  };

  return (
     <div className="page-wrapper">
      <Header>
      <PageHeader />
      </Header>
      <SectionsContainer {...options}>
        <Section>
          <HomePage />
        </Section>
        <Section>
          <About />
          <Contact />
        </Section>
        <Section>
          <Projects />
          <Contact />
        </Section>
        <Section>
          <FunAbout />
          <Contact />
        </Section>
      </SectionsContainer>
      {/* <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
          <Contact />
        </Route>
        <Route exact path="/about">
          <Header />
          <About />
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Header />
          <Projects />
          <Contact />
        </Route>
      </Switch> */}
    </div>
    // <Switch>
    //   <Route path="*">
    //     <Redirect to="/error" />
    //   </Route>
    // </Switch>
    /* <Route exact path="/contact">
          <Header />
          <Contact />
        </Route> */
  );
};

export default App;
