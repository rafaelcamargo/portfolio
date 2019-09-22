import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Experience } from '@scripts/experience/experience';
import { Home } from '@scripts/home/home';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import { Skills } from '@scripts/skills/skills';
import { Stories } from '@scripts/stories/stories';

export function AppRouter() {
  return (
    <Router>
      <ScrollToTop>
        <Route path="/" exact component={ Home } />
        <Route path="/experience" exact component={ Experience } />
        <Route path="/projects" exact component={ Projects } />
        <Route path="/recommendations" exact component={ Recommendations } />
        <Route path="/skills" exact component={ Skills } />
        <Route path="/stories" exact component={ Stories } />
      </ScrollToTop>
    </Router>
  );
}
