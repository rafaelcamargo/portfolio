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
import { RComponentMaturityModelEN } from '@scripts/stories/views/component-maturity-model/component-maturity-model-en';
import { RComponentMaturityModelPT } from '@scripts/stories/views/component-maturity-model/component-maturity-model-pt';
import { RBottlesAndPrinciplesEN } from '@scripts/stories/views/bottles-and-principles/bottles-and-principles-en';
import { RFormattingQualityEN } from '@scripts/stories/views/formatting-quality/formatting-quality-en';
import { RFormattingQualityPT } from '@scripts/stories/views/formatting-quality/formatting-quality-pt';
import storySummaries from '@scripts/stories/constants/story-summaries';

export class AppRouter extends Component {
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
            <Route path={ storySummaries[4].en.url.href } exact component={ RComponentMaturityModelEN } />
            <Route path={ storySummaries[4].pt.url.href } exact component={ RComponentMaturityModelPT } />
            <Route path={ storySummaries[5].en.url.href } exact component={ RBottlesAndPrinciplesEN } />
            <Route path={ storySummaries[6].en.url.href } exact component={ RFormattingQualityEN } />
            <Route path={ storySummaries[6].pt.url.href } exact component={ RFormattingQualityPT } />
          </ScrollToTop>
        </RHistory>
      </Router>
    );
  }
}
