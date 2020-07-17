import '@styles/home-hero.styl';
import React, { Component } from 'react';
import { Hero } from '@scripts/base/components/hero/hero';
import { HeroLink } from '@scripts/base/components/hero-link/hero-link';
import { HomeMobilePanel } from '@scripts/home/components/home-mobile-panel/home-mobile-panel';

export class HomeHero extends Component {
  render() {
    return (
      <div className="r-home-hero">
        <Hero size="large">
          <div className="r-home-hero-copy-container">
            <h1>
              My name is Rafael.<br />I am an expert in building UI components.
            </h1>
          </div>
        </Hero>
      </div>
    );
  }
}
