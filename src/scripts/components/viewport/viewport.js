import React, { Component } from 'react';
import { RTopbar } from '@scripts/components/topbar/topbar';

export class RViewport extends Component {
  render() {
    return (
      <main className="r-viewport">
        <RTopbar />
        { this.props.children }
      </main>
    );
  }
}
