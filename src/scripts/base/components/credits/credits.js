import '@styles/credits.styl';
import React, { Component } from 'react';

export class RCredits extends Component {
  render() {
    return (
      <div className="r-credits">
        <p>
          This is an open source website. If you wanna give a look on
          it, <a href="https://github.com/rafaelcamargo/portfolio" target="_blank">
          click here</a>.
        </p>
      </div>
    );
  }
}
