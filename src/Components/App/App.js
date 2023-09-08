import React, { useState } from 'react';
import { HomePage } from '../HomePage/HomePage';
import { Header } from '../Header/Header';
import { Contact } from '../Contact/Contact';
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="page-wrapper">
      <Switch>
        <Route exact path="/">
          <Header />
          <HomePage />
          <Contact />
        </Route>
        {/* <Route exact path="/contact">
          <Header />
          <Contact />
        </Route> */}
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
      </Switch>
    </div>
    // <Switch>
    //   <Route path="*">
    //     <Redirect to="/error" />
    //   </Route>
    // </Switch>
  );
};

export default App;
