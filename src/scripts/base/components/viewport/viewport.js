import '@styles/viewport.styl';
import React, { Component } from 'react';
import { RTopbar } from '@scripts/base/components/topbar/topbar';

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
