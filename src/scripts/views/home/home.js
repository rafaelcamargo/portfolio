import React, { Component } from 'react';
import { RHero } from '@scripts/components/hero/hero';
import { RViewport } from '@scripts/components/viewport/viewport';

export class Home extends Component {
  render() {
    return (
      <RViewport>
        <RHero title="My name is Rafael. I am an expert in building UI components." />
      </RViewport>
    );
  }
}
