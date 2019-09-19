import '@styles/container.styl';
import React, { Component } from 'react';

export class RContainer extends Component {
  render() {
    return (
      <div className="r-container">
        { this.props.children }
      </div>
    );
  }
}
