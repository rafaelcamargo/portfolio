import '@styles/feature.styl';
import React, { Component } from 'react';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';

export class RFeature extends Component {
  render() {
    return (
      <div className="r-feature">
        <h2>{ this.props.title }</h2>
        <div className="r-feature-body">
          { this.props.children }
        </div>
        <RCtaLink to={ this.props.ctaTo } text={ this.props.ctaText } />
      </div>
    );
  }
}
