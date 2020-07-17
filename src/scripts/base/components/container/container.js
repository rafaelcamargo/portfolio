import '@styles/container.styl';
import React, { Component } from 'react';

export class Container extends Component {
  render() {
    return (
      <div className="r-container">
        { this.props.children }
      </div>
    );
  }
}
