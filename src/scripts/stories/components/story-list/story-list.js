import '@styles/story-list.styl';
import React, { Component } from 'react';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class RStoryList extends Component {
  render() {
    return (
      <ul className="r-story-list">
        {
          buildItems(
            this.props.summaryIds,
            this.props.primaryLanguage,
            this.props.secondaryLanguage
          )
        }
      </ul>
    );
  }
}

function buildItems(summaryIds, primaryLanguage, secondaryLanguage){
  return getSummaries(summaryIds).map(summary => {
    return buildItem(summary, primaryLanguage, secondaryLanguage);
  }).reverse();
}

function getSummaries(ids){
  const summaries = storySummariesService.getSummaries();
  return ids ? filterSummariesByIds(summaries, ids) : summaries;
}

function filterSummariesByIds(summaries, ids){
  return summaries.filter(summary => {
    for (var i = 0; i < ids.length; i++) {
      if(summary.id === ids[i])
        return true;
    }
  });
}

function buildItem(summary, primaryLanguage, secondaryLanguage){
  return  <li key={ summary.id }>
            <RStorySummary
              summary={ summary }
              primaryLanguage={ primaryLanguage }
              secondaryLanguage={ secondaryLanguage }
            />
          </li>;
}
