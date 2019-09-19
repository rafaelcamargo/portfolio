import '@styles/row.styl';
import React, { Component } from 'react';

export class RRow extends Component {
  render() {
    return (
      <div className="r-row">
        { this.props.children }
      </div>
    );
  }
}
