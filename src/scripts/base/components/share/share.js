import '@styles/share.styl';
import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';
import routeService from '@scripts/base/services/route/route';
import analyticsService from '@scripts/base/services/analytics/analytics';

export class RShare extends Component {
  constructor(props){
    super(props);
  }

  onTwitterButtonClick = () => {
    const { message, url } = this.props;
    const tweet = this.buildTweet(message, url);
    routeService.openUrl('https://twitter.com/intent/tweet', { text: tweet });
    analyticsService.trackEvent('twitter share button clicked', { url, tweet });
  };

  buildTweet = (message, url) => {
    const prefix = 'Check out this story written by @rcamargo:';
    return `${prefix} "${message}" ${url}`;
  };

  render() {
    return (
      <div className="r-share" lang="en">
        <span className="r-share-text">Share</span>
        <ul className="r-share-items">
          <li className="r-share-item">
            <RButton
              iconName="twitter"
              theme="faceless"
              ariaLabel="twitter"
              onClick={ this.onTwitterButtonClick }
              data-share-twitter-button>
            </RButton>
          </li>
        </ul>
      </div>
    );
  }
}
