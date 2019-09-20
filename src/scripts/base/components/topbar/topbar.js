import '@styles/topbar.styl';
import React, { Component } from 'react';
import { RContainer } from '@scripts/base/components/container/container';
import { RLogo } from '@scripts/base/components/logo/logo';
import { RMenu } from '@scripts/base/components/menu/menu';

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
