import '@styles/newsletter.styl';
import React, { Component } from 'react';
import { RNewsletterLink } from '@scripts/base/components/newsletter-link/newsletter-link';
import analyticsService from '@scripts/base/services/analytics/analytics';
import localesService from '@scripts/base/services/locales/locales';

export class RNewsletter extends Component {
  constructor(props){
    super(props);
    this.setTexts(localesService.get(props.lang, 'Newsletter'));
  }

  setTexts = texts => {
    this.texts = texts;
  };

  render() {
    return (
      <div className="r-newsletter" lang={ this.props.lang }>
        <span>
          { this.texts.cta }
        </span> <RNewsletterLink text={ this.texts.link } />
      </div>
    );
  }
}
