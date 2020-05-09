import '@styles/quote.styl';
import React, { Component } from 'react';
import { RExternalLink } from '@scripts/base/components/external-link/external-link';

export class RQuote extends Component {
  render() {
    return (
      <blockquote className="r-quote" lang={ this.props.lang }>
        { this.props.children }
        <cite>
          <RExternalLink href={ this.props.sourceHref }>
            { this.props.sourceText }
          </RExternalLink>
        </cite>
      </blockquote>
    );
  }
}
