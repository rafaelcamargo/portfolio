import '@styles/share.styl';
import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';
import analyticsService from '@scripts/base/services/analytics/analytics';
import localesService from '@scripts/base/services/locales/locales';
import routeService from '@scripts/base/services/route/route';

export class RShare extends Component {
  constructor(props){
    super(props);
    this.setTexts(localesService.get(props.lang, 'Share'));
  }

  setTexts = texts => {
    this.texts = texts;
  };

  onTwitterButtonClick = () => {
    const { message, url } = this.props;
    const tweet = `${ this.texts.tweetPrefix } "${message}" ${url}`;
    routeService.openUrl('https://twitter.com/intent/tweet', { text: tweet });
    analyticsService.trackEvent('twitter share button clicked', { url, tweet });
  };

  render() {
    return (
      <div className="r-share" lang={ this.props.lang }>
        <span
          className="r-share-label"
          data-share-label>
          { this.texts.label }
        </span>
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
