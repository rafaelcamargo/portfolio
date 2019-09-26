import '@styles/topbar.styl';
import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';
import { RContainer } from '@scripts/base/components/container/container';
import { RLogo } from '@scripts/base/components/logo/logo';
import { RMenu } from '@scripts/base/components/menu/menu';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

export class RTopbar extends Component {
  onMenuItemClick = () => {
    sidebarState.toggle();
  };

  render() {
    return (
      <div className="r-topbar">
        <RContainer>
          <RButton
            iconName="menu"
            theme="faceless"
            ariaLabel="menu"
            onClick={ this.onMenuItemClick }
            data-menu-button>
          </RButton>
          <RLogo />
          <RMenu />
        </RContainer>
      </div>
    );
  }
}
