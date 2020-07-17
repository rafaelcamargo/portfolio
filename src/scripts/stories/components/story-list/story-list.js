import '@styles/story-list.styl';
import React, { Component } from 'react';
import { StorySummary } from '@scripts/stories/components/story-summary/story-summary';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class StoryList extends Component {
  render() {
    return (
      <ul className="r-story-list">
        { buildItems(this.props.featured) }
      </ul>
    );
  }
}

function buildItems(featured){
  const querySummaries = getQueryMethod(featured);
  return querySummaries().map(summary => buildItem(summary));
}

function getQueryMethod(featured){
  if(featured)
    return storySummariesService.getFeaturedSummaries;
  else if(featured === false)
    return storySummariesService.getNonFeaturedSummaries;
  else
    return storySummariesService.getPublicSummaries;
}

function buildItem(summary){
  return <li key={ summary.id }><StorySummary summary={ summary } /></li>;
}
