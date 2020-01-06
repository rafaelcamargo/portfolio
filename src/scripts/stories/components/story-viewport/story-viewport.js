import '@styles/story-viewport.styl';
import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RImage } from '@scripts/base/components/image/image';
import { RRow } from '@scripts/base/components/row/row';
import { RHero } from '@scripts/base/components/hero/hero';
import { RSection } from '@scripts/base/components/section/section';
import { RShare } from '@scripts/base/components/share/share';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import routeService from '@scripts/base/services/route/route';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class RStoryViewport extends Component {
  constructor(props){
    super(props);
    const summary = storySummariesService.findSummary(props.storySummaryId);
    this.setSummary(summary);
    this.setContent(summary[props.primaryLanguage]);
    this.setStoryUrl(routeService.getCurrentUrl());
  }

  setSummary = summary => {
    this.summary = summary;
  };

  setContent = content => {
    this.content = content;
  };

  setStoryUrl = url => {
    this.storyUrl = url;
  };

  render() {
    return (
      <div className="r-story-viewport">
        <RViewport
          title={ this.content.title }
          description={ this.content.description }
          keywords={ this.content.keywords }
          lang={ this.props.primaryLanguage }>
          <RHero title={ this.content.title } size="small" />
          <RSection>
            <RRow>
              <RCol size="12">
                <div className="r-story-viewport-image-container">
                  <RImage filename={ this.summary.image.filename } alt={ this.summary.image.alt } />
                </div>
                <div className="r-story-viewport-content">
                  <RShare
                    message={ this.content.title }
                    url={ this.storyUrl }
                    lang={ this.props.primaryLanguage } />
                  { this.props.children }
                </div>
              </RCol>
            </RRow>
          </RSection>
        </RViewport>
      </div>
    );
  }
}
