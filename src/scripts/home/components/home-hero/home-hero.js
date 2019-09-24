import '@styles/home-hero.styl';
import React, { Component } from 'react';
import { RHero } from '@scripts/base/components/hero/hero';
import { RHomeMobilePanel } from '@scripts/home/components/home-mobile-panel/home-mobile-panel';

export class RHomeHero extends Component {
  render() {
    return (
      <div className="r-home-hero">
        <RHero size="large">
          <h1>
            My name is Rafael.<br />I am an expert in building UI components.
          </h1>
          <div className="r-home-hero-art-container">
            <RHomeMobilePanel />
          </div>
        </RHero>
      </div>
    );
  }
}
