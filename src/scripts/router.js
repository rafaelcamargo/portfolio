import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@scripts/home/home.js';

export function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}
