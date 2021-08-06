import '@styles/feature.styl';
import React, { Component } from 'react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';

export class Feature extends Component {
  render() {
    return (
      <div className="r-feature">
        <h2>{ this.props.title }</h2>
        <div className="r-feature-body">
          { this.props.children }
        </div>
        <CtaLink
          to={ this.props.ctaTo }
          href={ this.props.ctaHref }
          text={ this.props.ctaText }
        />
      </div>
    );
  }
}
