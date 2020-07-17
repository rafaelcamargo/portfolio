import '@styles/topbar.styl';
import React, { Component } from 'react';
import { Button } from '@scripts/base/components/button/button';
import { Container } from '@scripts/base/components/container/container';
import { Logo } from '@scripts/base/components/logo/logo';
import { Menu } from '@scripts/base/components/menu/menu';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

export class Topbar extends Component {
  onMenuItemClick = () => {
    sidebarState.toggle();
  };

  render() {
    return (
      <div className="r-topbar">
        <Container>
          <Button
            iconName="menu"
            theme="faceless"
            ariaLabel="menu"
            onClick={ this.onMenuItemClick }
            data-menu-button>
          </Button>
          <Logo />
          <Menu />
        </Container>
      </div>
    );
  }
}
