import '@styles/story-viewport.styl';
import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Image } from '@scripts/base/components/image/image';
import { Hero } from '@scripts/base/components/hero/hero';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { StoryFooter } from '@scripts/stories/components/story-footer/story-footer';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import routeService from '@scripts/base/services/route/route';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class StoryViewport extends Component {
  constructor(props){
    super(props);
    const path = routeService.getCurrentPathname();
    const summary = storySummariesService.findSummaryByUrlPath(path);
    this.setSummary(summary);
  }

  setSummary = summary => {
    this.summary = summary;
  };

  render() {
    return (
      <div className="r-story-viewport">
        <Viewport
          title={ this.summary.title }
          description={ this.summary.excerpt }
          keywords={ this.summary.keywords }
          lang={ this.summary.lang }
          image={ this.summary.thumbnail }>
          <Hero title={ this.summary.title } size="small" />
          <Section>
            <Row>
              <Col size="12">
                <div className="r-story-viewport-content">
                  { this.props.children }
                </div>
              </Col>
            </Row>
          </Section>
          <StoryFooter
            storyRelationIds={ this.summary.relationIds }
            lang={ this.summary.lang } />
        </Viewport>
      </div>
    );
  }
}
