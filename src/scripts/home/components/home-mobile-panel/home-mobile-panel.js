import '@styles/home-mobile-panel.styl'
import React, { Component } from 'react';
import { RMobile } from '@scripts/base/components/mobile/mobile';

export class RHomeMobilePanel extends Component {
  render() {
    return (
      <div className="r-home-mobile-panel">
        <RMobile screenshot="pitsby.svg" />
        <RMobile screenshot="nashios.svg" />
      </div>
    );
  }
}
