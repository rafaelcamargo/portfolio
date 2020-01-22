import '@styles/newsletter-bar.styl';
import React, { Component } from 'react';
import { RNewsletterLink } from '@scripts/base/components/newsletter-link/newsletter-link';
import analyticsService from '@scripts/base/services/analytics/analytics';

export class RNewsletterBar extends Component {
  render() {
    return (
      <div className="r-newsletter-bar">
        <p>
          Stay in the loop. <RNewsletterLink text="Subscribe" /> to my
          newsletter and be notified about new projects and stories. No spam ever.
          </p>
      </div>
    );
  }
}
