import React, { Component } from 'react';

import './App.css';
import './precompiled/aos.css';
import './precompiled/bootstrap.min.css';

import Header from './sectors/Header';
import Profile from './sectors/Profile';
import About from './sectors/About';
import Skill from './sectors/Skill';
import Portfolio from './sectors/Portfolio';
import Experience from './sectors/Experience';
import EducationSchools from './sectors/Experience';
import PersonalProjects from './sectors/PersonalProjects';
import Contact from './sectors/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-content">
          <div>
            <Profile />
            <About />
            <Skill />
            <Portfolio />
            <Experience />
            <EducationSchools />
            <PersonalProjects />
          </div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
