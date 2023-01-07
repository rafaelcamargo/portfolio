import React, { Component } from 'react';

export class ExternalLink extends Component {
  render() {
    return (
      <span className="r-external-link">
        <a
          href={ this.props.href }
          lang={ this.props.lang }
          rel="noreferrer"
          target="_blank">
          { this.props.children }
        </a>
      </span>
    );
  }
}
