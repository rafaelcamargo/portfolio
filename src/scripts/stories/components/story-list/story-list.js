import '@styles/story-list.styl';
import React, { Component } from 'react';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import storySummariesService from '@scripts/stories/services/stories/stories';

export class RStoryList extends Component {
  render() {
    return (
      <ul className="r-story-list">
        { buildItems() }
      </ul>
    );
  }
}

function buildItems(stories){
  return storySummariesService.getSummaries().map(summary => buildItem(summary)).reverse();
}

function buildItem(summary){
  return  <li key={ summary.id }>
            <RStorySummary
              summary={ summary }
              primaryLanguage="en"
              secondaryLanguage="pt"
            />
          </li>;
}
