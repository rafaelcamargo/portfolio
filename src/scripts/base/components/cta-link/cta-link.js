import '@styles/cta-link.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RIcon } from '@scripts/base/components/icon/icon';

export class RCtaLink extends Component {
  render() {
    return (
      <span className="r-cta-link">
        <Link to={ this.props.to }>
          <span
            className="r-cta-link-text"
            data-cta-link-text>
            { this.props.text }
          </span>
          <RIcon name="arrow" />
        </Link>
      </span>
    );
  }
}

RCtaLink.defaultProps = {
  to: '/'
};
