import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Contact } from '@scripts/contact/contact';
import { Experience } from '@scripts/experience/experience';
import RHistory from '@scripts/base/components/history/history';
import { Home } from '@scripts/home/home';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import { Skills } from '@scripts/skills/skills';
import { Stories } from '@scripts/stories/stories';
import storiesService from '@scripts/stories/services/stories/stories';

class AppRouter extends Component {
  render(){
    return (
      <Router>
        <RHistory>
          <ScrollToTop>
            <Route path="/" exact component={ Home } />
            <Route path="/contact" exact component={ Contact } />
            <Route path="/experience" exact component={ Experience } />
            <Route path="/projects" exact component={ Projects } />
            <Route path="/recommendations" exact component={ Recommendations } />
            <Route path="/skills" exact component={ Skills } />
            <Route path="/stories" exact component={ Stories } />
            { buildStoryViewRoutes() }
          </ScrollToTop>
        </RHistory>
      </Router>
    );
  }
}

function buildStoryViewRoutes(){
  return storiesService.getSummaryWithViews().map((summary, index) => {
    return (
      <Route
        path={ summary.url.href }
        exact component={ summary.view }
        key={ index } />
    );
  });
}

export default AppRouter;
