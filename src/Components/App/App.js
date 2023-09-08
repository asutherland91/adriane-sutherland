import React, { useState } from 'react';
import { HomePage } from '../HomePage/HomePage';
import { Header } from '../Header/Header';
import { Contact } from '../Contact/Contact';
import { About } from '../About/About';
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
    </Switch>
    </div>
    // <Switch>

    //   <Route exact path="/projects">
    //     <Projects />
    //   </Route>
    //   <Route path="*">
    //     <Redirect to="/error" />
    //   </Route>
    // </Switch>
  );
};

export default App;
