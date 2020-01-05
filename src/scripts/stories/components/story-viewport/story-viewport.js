import '@styles/story-viewport.styl';
import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RRow } from '@scripts/base/components/row/row';
import { RHero } from '@scripts/base/components/hero/hero';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import storiesService from '@scripts/stories/services/stories/stories';

export class RStoryViewport extends Component {
  constructor(props){
    super(props);
    this.setSummary(storiesService.findSummary(props.storySummaryId));
  }

  setSummary = summary => {
    this.summary = summary;
  };

  render() {
    return (
      <div className="r-story-viewport">
        <RViewport
          title={ this.summary.title }
          description={ this.summary.description }
          keywords={ this.summary.keywords }>
          <RHero title={ this.summary.title } size="small" />
          <RSection>
            <RRow>
              <RCol size="12">
                <div className="r-story-viewport-content">
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
