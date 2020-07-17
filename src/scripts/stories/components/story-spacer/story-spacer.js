import '@styles/story-spacer.styl';
import React, { Component } from 'react';

export class StorySpacer extends Component {
  render() {
    return (
      <div className="r-story-spacer">
        { this.props.children }
      </div>
    );
  }
}
