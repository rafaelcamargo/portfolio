import '@styles/story-footer.styl';
import React, { Component } from 'react';
import { Divider } from '@scripts/base/components/divider/divider';
import { NewsletterModalTrigger } from '@scripts/newsletter/components/newsletter-modal-trigger/newsletter-modal-trigger';
import { PitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';
import { StoryRelations } from '@scripts/stories/components/story-relations/story-relations';
import locales from './story-footer-locales';

export class StoryFooter extends Component {
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
      <footer className="r-story-footer">
        { buildStoryRelation(this.props.storyRelationIds, this.props.lang) }
        <p className="r-story-footer-newsletter-statement">
          { this.texts.newsletter } <NewsletterModalTrigger lang={ this.props.lang }>
            { this.texts.newsletterLink }
          </NewsletterModalTrigger>.
        </p>
        <Divider />
        <PitsbyPromo />
      </footer>
    );
  }
}

function buildStoryRelation(storyRelationIds, lang){
  if(storyRelationIds)
    return (
      <>
        <Divider />
        <StoryRelations
          ids={ storyRelationIds }
          lang={ lang } />
      </>
    )
}
