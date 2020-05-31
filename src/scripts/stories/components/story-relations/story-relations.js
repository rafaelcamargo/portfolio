import '@styles/story-relations.styl';
import React, { Component } from 'react';
import storiesService from '@scripts/stories/services/stories/stories';
import locales from './story-relations-locales';

export class RStoryRelations extends Component {
  constructor(props){
    super(props);
    const lang = props.lang || 'en';
    this.setTexts(locales[lang]);
  }

  setTexts(texts){
    this.texts = texts;
  }

  render() {
    return (
      <div className="r-story-relations">
        { buildRelationSentence(this.props.ids, this.texts.related) }
      </div>
    );
  }
}

function buildRelationSentence(ids = [], relatedText){
  if(ids.length)
    return (
      <p>{ relatedText } { buildRelatedStoryLinks(ids) }</p>
    );
}

function buildRelatedStoryLinks(ids){
  const stories = storiesService.filterByIds(ids);
  const links = stories.map((story, index) => {
    const isLastLink = isLastRelatedStoryLink(stories, index);
    return (
      <span key={ index }>
        <a href={ story.url.href }>
          { story.title }
        </a>
        { getPunctuation(isLastLink) }
      </span>
    );
  });
  return links;
}

function getPunctuation(isLastRelatedStoryLink){
  return isLastRelatedStoryLink ? <span>.</span> : <span>,</span>;
}

function isLastRelatedStoryLink(stories, currentStoryIndex){
  return currentStoryIndex === stories.length - 1;
}
