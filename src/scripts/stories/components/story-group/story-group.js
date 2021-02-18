import '@styles/story-group.styl';
import React, { Component } from 'react';

export class StoryGroup extends Component {
  render() {
    return (
      <div className="r-story-group">
        <div className="r-story-group-title" data-story-group-title>
          { this.props.title }
        </div>
        { this.props.children }
      </div>
    );
  }
}
