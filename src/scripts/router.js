import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@scripts/home/home';
import { Skills } from '@scripts/skills/skills';
import { Experience } from '@scripts/experience/experience';

export function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={ Home } />
      <Route path="/skills" exact component={ Skills } />
      <Route path="/experience" exact component={ Experience } />
    </Router>
  );
}
