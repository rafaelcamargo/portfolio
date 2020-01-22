import React, { Component } from 'react';
import { RHeroLink } from '@scripts/base/components/hero-link/hero-link';
import analyticsService from '@scripts/base/services/analytics/analytics';

export class RNewsletterLink extends Component {
  onNewsletterClick = () => {
    analyticsService.trackEvent('newsletter link clicked');
  };

  render() {
    return (
      <span className="r-newsletter-hero-link">
        <RHeroLink
          href="http://eepurl.com/gPeUgz"
          text={ this.props.text }
          onClick={ this.onNewsletterClick } />
      </span>
    );
  }
}
