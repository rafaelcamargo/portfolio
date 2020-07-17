import '@styles/project.styl';
import React, { Component } from 'react';
import { Avatron } from '@scripts/base/components/avatron/avatron';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';

export class Project extends Component {
  render() {
    return (
      <li className="r-project">
        <Avatron
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
      <CtaLink href={ ctaUrl } text={ ctaText } />
    </div> :
    null;
}
