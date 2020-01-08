import '@styles/quote.styl';
import React, { Component } from 'react';

export class RQuote extends Component {
  render() {
    return (
      <blockquote className="r-quote">
        { this.props.children }
        <cite>
          <a href={ this.props.sourceHref } target="_blank">
            { this.props.sourceText }
          </a>
        </cite>
      </blockquote>
    );
  }
}
