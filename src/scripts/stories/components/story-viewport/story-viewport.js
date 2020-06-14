import '@styles/story-viewport.styl';
import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RImage } from '@scripts/base/components/image/image';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RStoryFooter } from '@scripts/stories/components/story-footer/story-footer';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import routeService from '@scripts/base/services/route/route';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class RStoryViewport extends Component {
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
        <RViewport
          title={ this.summary.title }
          description={ this.summary.excerpt }
          keywords={ this.summary.keywords }
          lang={ this.summary.lang }
          image={ this.summary.thumbnail }>
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
          <RStoryFooter
            storyRelationIds={ this.summary.relationIds }
            lang={ this.summary.lang } />
        </RViewport>
      </div>
    );
  }
}
