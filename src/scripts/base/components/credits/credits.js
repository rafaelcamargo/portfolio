import '@styles/credits.styl';
import React, { Component } from 'react';

export class Credits extends Component {
  render() {
    return (
      <div className="r-credits">
        <p>
          This is an <a href="https://github.com/rafaelcamargo/portfolio" target="_blank">
          open-source website</a>. Lots of UI components here are powered
          by <a href="https://taslonic.com" target="_blank">Taslonic</a>.
        </p>
      </div>
    );
  }
}
