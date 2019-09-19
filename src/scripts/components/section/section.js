import '@styles/section.styl';
import React, { Component } from 'react';

export class RSection extends Component {
  render() {
    return (
      <div className="r-section">
        { this.props.children }
      </div>
    );
  }
}
