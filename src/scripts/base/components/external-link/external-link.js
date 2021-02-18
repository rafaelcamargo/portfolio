import React, { Component } from 'react';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from '@scripts/base/services/route/route';

export class ExternalLink extends Component {
  onClick = evt => {
    const { text, href } = evt.target;
    analyticsService.trackEvent(this.getTrackEventText(), {
      linkText: text,
      linkHref: href,
      url: routeService.getCurrentUrl()
    });
  };

  getTrackEventText = () => {
    return this.props.trackName || 'clicked external link';
  };

  render() {
    return (
      <span className="r-external-link">
        <a
          href={ this.props.href }
          onClick={ this.onClick }
          lang={ this.props.lang }
          rel="noreferrer"
          target="_blank">
          { this.props.children }
        </a>
      </span>
    );
  }
}
