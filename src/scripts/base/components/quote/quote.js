import '@styles/quote.styl';
import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';

export class Quote extends Component {
  render() {
    return (
      <blockquote className="r-quote" lang={ this.props.lang }>
        { this.props.children }
        <cite>
          <ExternalLink href={ this.props.sourceHref }>
            { this.props.sourceText }
          </ExternalLink>
        </cite>
      </blockquote>
    );
  }
}
