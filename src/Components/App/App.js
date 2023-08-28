import React, { useState } from "react";
import { HomePage } from "../HomePage/HomePage";
import './App.css';

const App = () => {
  return (
    <div className="page-wrapper">
      <HomePage />
    </div>
    // <Switch>
    //   <Route exact path="/">
    //       <Header />
    //       <HomePage />
    //   </Route>
    //   <Route exact path="/contact">
    //       <Header />
    //       <Contact />
    //   </Route>
    //  <Route exact path="/about">
    //   <Header />
    //   <About />
    // </Route>
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
