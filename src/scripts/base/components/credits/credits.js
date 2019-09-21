import '@styles/credits.styl';
import React, { Component } from 'react';

export class RCredits extends Component {
  render() {
    return (
      <div className="r-credits">
        <p>
          This site is powered by React, pre rendered on Webpack build time
          and is open source. If you wanna give a look on its source code,
          check it out on <a href="https://github.com/rafaelcamargo/portfolio">Github</a>.
        </p>
      </div>
    );
  }
}
