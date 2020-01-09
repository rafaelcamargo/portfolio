import '@styles/story-footer.styl';
import React, { Component } from 'react';
import { RDivider } from '@scripts/base/components/divider/divider';
import { RNewsletter } from '@scripts/base/components/newsletter/newsletter';
import { RShare } from '@scripts/base/components/share/share';

export class RStoryFooter extends Component {
  render() {
    return (
      <footer className="r-story-footer" lang={ this.props.lang }>
        <RDivider />
        <div className="r-story-footer-content">
          <div className="r-story-footer-newsletter">
            <RNewsletter lang={ this.props.lang } />
          </div>
          <div className="r-story-footer-share">
            <RShare
              message={ this.props.shareMessage }
              url={ this.props.shareUrl }
              lang={ this.props.lang } />
          </div>
        </div>
      </footer>
    );
  }
}
