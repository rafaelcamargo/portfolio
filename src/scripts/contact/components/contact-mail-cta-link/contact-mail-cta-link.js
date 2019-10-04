import React, { Component } from 'react';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import analyticsService from '@scripts/base/services/analytics/analytics';

export class RContactMailCtaLink extends Component {
  render() {
    return (
      <span className="r-contact-mail-cta-link">
        <RCtaLink
          href="mailto:hello@rafaelcamargo.com"
          text="hello@rafaelcamargo.com"
          onClick={ onCtaLinkClick } />
      </span>
    );
  }
}

function onCtaLinkClick(evt){
  analyticsService.trackEvent('contact mail cta link clicked');
}
