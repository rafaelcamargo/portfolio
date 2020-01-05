import '@styles/code.styl';
import React, { Component } from 'react';

export class RCode extends Component {
  render() {
    return (
      <div className="r-code">
        <code>
          { this.props.children }
        </code>
      </div>
    );
  }
}
