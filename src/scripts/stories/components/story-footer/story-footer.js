import '@styles/story-footer.styl';
import React, { Component } from 'react';
import { RDivider } from '@scripts/base/components/divider/divider';
import { RNewsletterModalTrigger } from '@scripts/newsletter/components/newsletter-modal-trigger/newsletter-modal-trigger';
import { RPitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';
import { RStoryRelations } from '@scripts/stories/components/story-relations/story-relations';
import locales from './story-footer-locales';

export class RStoryFooter extends Component {
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
          { this.texts.newsletter } <RNewsletterModalTrigger lang={ this.props.lang }>
            { this.texts.newsletterLink }
          </RNewsletterModalTrigger>.
        </p>
        <RDivider />
        <RPitsbyPromo />
      </footer>
    );
  }
}

function buildStoryRelation(storyRelationIds, lang){
  if(storyRelationIds)
    return (
      <>
        <RDivider />
        <RStoryRelations
          ids={ storyRelationIds }
          lang={ lang } />
      </>
    )
}
