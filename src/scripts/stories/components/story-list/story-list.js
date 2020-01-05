import '@styles/story-list.styl';
import React, { Component } from 'react';
import storySummariesService from '@scripts/stories/services/stories/stories';
import imagesService from '@scripts/base/services/images/images';

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
  return storySummariesService.getSummaries().map(summary => buildItem(summary));
}

function buildItem(summary){
  return <li key={ summary.url }>
          <div className="r-story-list-header">
            <img src={ buildImageUrl(summary.image.filename) } alt={ summary.image.alt } />
          </div>
          <h2><a href={ summary.url } target="_blank">{ summary.title }</a></h2>
          <p>{ summary.description }</p>
          { buildPortugueseLink(summary) }
        </li>;
}

function buildImageUrl(filename){
  return `${ imagesService.getBasePath() }/${filename}`;
}

function buildPortugueseLink({ pt }){
  return pt ?
    <div className="r-story-list-portuguese">
      <h3>Leia em Português</h3>
      <a href={ pt.url } target="_blank" data-story-list-pt-link>{ pt.title }</a>
    </div> :
    null;
}
