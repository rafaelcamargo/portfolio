import '@styles/newsletter.styl';
import React, { Component } from 'react';
import { RHeroLink } from '@scripts/base/components/hero-link/hero-link';
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

  onNewsletterClick = () => {
    analyticsService.trackEvent('newsletter link clicked');
  };

  render() {
    return (
      <div className="r-newsletter" lang={ this.props.lang }>
        <span>
          { this.texts.cta }
        </span> <RHeroLink
          href="http://eepurl.com/gPeUgz"
          text={ this.texts.link }
          onClick={ this.onNewsletterClick } />
      </div>
    );
  }
}
