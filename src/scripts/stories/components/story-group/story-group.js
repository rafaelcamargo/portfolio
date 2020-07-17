import '@styles/story-group.styl';
import React, { Component } from 'react';

export class RStoryGroup extends Component {
  render() {
    return (
      <div className="r-story-group">
        <h2>{ this.props.title }</h2>
        { this.props.children }
      </div>
    );
  }
}
