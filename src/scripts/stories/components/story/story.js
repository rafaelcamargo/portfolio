import '@styles/story.styl';
import React, { Component } from 'react';

export class RStory extends Component {
  render() {
    return (
      <div className="r-story">
        { this.props.children }
      </div>
    );
  }
}
