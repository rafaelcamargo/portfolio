import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Experience } from '@scripts/experience/experience';
import { Home } from '@scripts/home/home';
import { Projects } from '@scripts/projects/projects';
import { Skills } from '@scripts/skills/skills';

export function AppRouter() {
  return (
    <Router>
      <ScrollToTop>
        <Route path="/" exact component={ Home } />
        <Route path="/experience" exact component={ Experience } />
        <Route path="/projects" exact component={ Projects } />
        <Route path="/skills" exact component={ Skills } />
      </ScrollToTop>
    </Router>
  );
}
