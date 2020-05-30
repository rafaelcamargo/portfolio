import '@styles/story-list.styl';
import React, { Component } from 'react';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class RStoryList extends Component {
  render() {
    return (
      <ul className="r-story-list">
        { buildItems(this.props.summaryIds) }
      </ul>
    );
  }
}

function buildItems(summaryIds){
  return getSummaries(summaryIds).map(summary => buildItem(summary));
}

function getSummaries(ids){
  const summaries = storySummariesService.getPublicSummaries();
  return ids ? filterSummariesByIds(summaries, ids) : summaries;
}

function filterSummariesByIds(summaries, ids){
  return summaries.filter(summary => ids.includes(summary.id));
}

function buildItem(summary){
  return <li key={ summary.id }><RStorySummary summary={ summary } /></li>;
}
