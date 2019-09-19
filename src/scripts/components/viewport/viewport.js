import React, { Component } from 'react';

export class RViewport extends Component {
  render() {
    return (
      <main className="r-viewport">
        { this.props.children }
      </main>
    );
  }
}
