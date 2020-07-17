import '@styles/badge.styl';
import React, { Component } from 'react';

export class Badge extends Component {
  render() {
    return (
      <span className="r-badge">
        { this.props.children }
      </span>
    );
  }
}
