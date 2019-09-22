import '@styles/story-list.styl';
import React, { Component } from 'react';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import storiesService from '@scripts/stories/services/stories/stories';

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
  return storiesService.get().map(story => buildItem(story));
}

function buildItem(story){
  return <li key={ story.url }>
          <div className="r-story-list-header">
            <img src={ buildImageUrl(story.image.filename) } alt={ story.image.alt } />
          </div>
          <h2>{ story.title }</h2>
          <p>{ story.description }</p>
          <RCtaLink text="Read full story" href={ story.url } />
        </li>;
}

function buildImageUrl(filename){
  return `images/${filename}`;
}
