import '@styles/related-stories.styl';
import React, { Component } from 'react';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import localesService from '@scripts/base/services/locales/locales';
import en from '@scripts/stories/locales/en';
import pt from '@scripts/stories/locales/pt';

export class RRelatedStories extends Component {
  constructor(props){
    super(props);
    this.setTexts(localesService.get(this.props.primaryLanguage, 'RelatedStories', { en, pt }));
  }

  setTexts = texts => {
    this.texts = texts;
  };

  render() {
    return (
      <div className="r-related-stories">
        <div className="r-related-stories-title-container">
          <span className="r-related-stories-title" data-related-stories-title>
            { this.texts.title }
          </span>
        </div>
        <RStoryList
          summaryIds={ this.props.summaryIds }
          primaryLanguage={ this.props.primaryLanguage }
          secondaryLanguage={ this.props.secondaryLanguage } />
      </div>
    );
  }
}
