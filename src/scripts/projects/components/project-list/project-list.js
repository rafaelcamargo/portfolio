import '@styles/project-list.styl';
import React, { Component } from 'react';

export class ProjectList extends Component {
  render() {
    return (
      <ul className="r-project-list">
        { this.props.children }
      </ul>
    );
  }
}
