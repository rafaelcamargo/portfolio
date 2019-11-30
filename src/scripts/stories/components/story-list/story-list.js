import '@styles/story-list.styl';
import React, { Component } from 'react';
import storiesService from '@scripts/stories/services/stories/stories';
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
  return storiesService.get().map(story => buildItem(story));
}

function buildItem(story){
  return <li key={ story.url }>
          <div className="r-story-list-header">
            <img src={ buildImageUrl(story.image.filename) } alt={ story.image.alt } />
          </div>
          <h2><a href={ story.url } target="_blank">{ story.title }</a></h2>
          <p>{ story.description }</p>
          { buildPortugueseLink(story) }
        </li>;
}

function buildImageUrl(filename){
  return `${ imagesService.getBasePath() }/${filename}`;
}

function buildPortugueseLink({ pt }){
  return pt ?
    <div className="r-story-list-portuguese">
      <h3>Leia em Protuguês</h3>
      <a href={ pt.url } target="_blank" data-story-list-pt-link>{ pt.title }</a>
    </div> :
    null;
}
