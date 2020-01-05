import '@styles/story-viewport.styl';
import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RImage } from '@scripts/base/components/image/image';
import { RRow } from '@scripts/base/components/row/row';
import { RHero } from '@scripts/base/components/hero/hero';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class RStoryViewport extends Component {
  constructor(props){
    super(props);
    this.setSummary(storySummariesService.findSummary(props.storySummaryId));
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
                <div className="r-story-viewport-image-container">
                  <RImage filename={ this.summary.image.filename } alt={ this.summary.image.alt } />
                </div>
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
