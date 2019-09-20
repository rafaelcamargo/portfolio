import '@styles/topbar.styl';
import React, { Component } from 'react';
import { RContainer } from '@scripts/components/container/container';
import { RLogo } from '@scripts/components/logo/logo';

export class RTopbar extends Component {
  render() {
    return (
      <div className="r-topbar">
        <RContainer>
          <RLogo />
        </RContainer>
      </div>
    );
  }
}
