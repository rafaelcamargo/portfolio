import '@styles/project.styl';
import React, { Component } from 'react';
import { RAvatron } from '@scripts/base/components/avatron/avatron';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';

export class RProject extends Component {
  render() {
    return (
      <li className="r-project">
        <RAvatron
          image={ this.props.image }
          title={ this.props.title }
          url={ this.props.url }
          subtitle={ this.props.subtitle }
          badgeText={ this.props.badgeText }/>
        <p>{ this.props.children }</p>
        { buildCta(this.props.ctaUrl, this.props.ctaText) }
      </li>
    );
  }
}

function buildCta(ctaUrl, ctaText){
  return ctaUrl ?
    <div className="r-project-cta-link">
      <RCtaLink href={ ctaUrl } text={ ctaText } />
    </div> :
    null;
}
