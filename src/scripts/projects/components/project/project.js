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
          subtitle={ this.props.subtitle }
          badgeText={ this.props.badgeText }/>
        <p>{ this.props.children }</p>
        <div className="r-project-cta-links-container">
          <RCtaLink
            href={ this.props.ctaUrl }
            text={ this.props.ctaText } />
          { buildCodeCta(this.props) }
        </div>
      </li>
    );
  }
}

function buildCodeCta({ codeCtaUrl, codeCtaText }){
  return codeCtaUrl ? <RCtaLink href={ codeCtaUrl } text={ codeCtaText } /> : null;
}
