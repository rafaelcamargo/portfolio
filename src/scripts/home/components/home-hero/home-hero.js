import '@styles/home-hero.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RHero } from '@scripts/base/components/hero/hero';
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
            <p>
              I am always looking for great projects. Got a good one? <Link to="/contact">
              Contact me!</Link>
            </p>
          </div>
          <div className="r-home-hero-art-container">
            <RHomeMobilePanel />
          </div>
        </RHero>
      </div>
    );
  }
}
