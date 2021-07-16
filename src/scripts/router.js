import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact } from '@scripts/contact/contact';
import { Experience } from '@scripts/experience/experience';
import History from '@scripts/base/components/history/history';
import { Home } from '@scripts/home/home';
import { Influences } from '@scripts/influences/influences';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import { Skills } from '@scripts/skills/skills';

class AppRouter extends Component {
  render(){
    return (
      <Router>
        <History>
          <ScrollToTop>
            <Route path="/" exact component={ Home } />
            <Route path="/contact" exact component={ Contact } />
            <Route path="/experience" exact component={ Experience } />
            <Route path="/influences" exact component={ Influences } />
            <Route path="/projects" exact component={ Projects } />
            <Route path="/recommendations" exact component={ Recommendations } />
            <Route path="/skills" exact component={ Skills } />
          </ScrollToTop>
        </History>
      </Router>
    );
  }
}

export default AppRouter;
