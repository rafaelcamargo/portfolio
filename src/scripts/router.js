import React from 'react';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import History from '@scripts/base/components/history/history';
import { Contact } from '@scripts/contact/contact';
import { Experience } from '@scripts/experience/experience';
import { Home } from '@scripts/home/home';
import { Influences } from '@scripts/influences/influences';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import { Skills } from '@scripts/skills/skills';
import { Reads } from '@scripts/reads/reads';
import { Technologies } from '@scripts/technologies/technologies';
import routes from '@scripts/routes';

export const AppRouter = () => {
  return (
    <Router>
      <History>
        <ScrollToTop>
          {routes.map((path, index) => (
            <Route path={path} component={getComponentByRoutePath(path)} key={index} exact />
          ))}
        </ScrollToTop>
      </History>
    </Router>
  );
};

function getComponentByRoutePath(path){
  return {
    '/': Home,
    '/contact': Contact,
    '/experience': Experience,
    '/projects': Projects,
    '/recommendations': Recommendations,
    '/skills': Skills,
    '/influences': Influences,
    '/reads': Reads,
    '/technologies': Technologies
  }[path];
}
