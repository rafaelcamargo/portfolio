import '@styles/home-hero.styl';
import React, { Component } from 'react';
import { Hero } from '@scripts/base/components/hero/hero';

export class HomeHero extends Component {
  render() {
    return (
      <div className="r-home-hero">
        <Hero size="large">
          <h1>
            My name is Rafael.
          </h1>
          <p>
            A coder who <em>designs</em>. A designer who <em>codes</em>.
          </p>
        </Hero>
      </div>
    );
  }
}
