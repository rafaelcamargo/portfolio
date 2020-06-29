import '@styles/home-hero.styl';
import React, { Component } from 'react';
import { RHero } from '@scripts/base/components/hero/hero';
import { RHeroLink } from '@scripts/base/components/hero-link/hero-link';
import { RHomeMobilePanel } from '@scripts/home/components/home-mobile-panel/home-mobile-panel';

export class RHomeHero extends Component {
  render() {
    return (
      <div className="r-home-hero">
        <RHero size="large">
          <div className="r-home-hero-copy-container">
            <h1>
              My name is Rafael.<br />I am an expert in building UI components.
            </h1>
          </div>
        </RHero>
      </div>
    );
  }
}
