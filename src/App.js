import React, { Component } from 'react';

import './precompiled/bootstrap.min.css';
import './precompiled/aos.css';
import './App.css';

import Header from './sectors/Header';
import Profile from './sectors/Profile';
import About from './sectors/About';
import Skill from './sectors/Skill';
// import Portfolio from './sectors/Portfolio';
import Experience from './sectors/Experience';
import EducationSchools from './sectors/EducationSchools';
import PersonalProjects from './sectors/PersonalProjects';
import Contact from './sectors/Contact';

import LogRocket from 'logrocket';
LogRocket.init('ggyqhi/guilhermecamachocom');

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
            {/*<Portfolio />*/}
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
