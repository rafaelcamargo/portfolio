import '@styles/topbar.styl';
import React, { Component } from 'react';
import { RContainer } from '@scripts/components/container/container';
import { RLogo } from '@scripts/components/logo/logo';
import { RMenu } from '@scripts/components/menu/menu';

export class RTopbar extends Component {
  render() {
    return (
      <div className="r-topbar">
        <RContainer>
          <RLogo />
          <RMenu />
        </RContainer>
      </div>
    );
  }
}
