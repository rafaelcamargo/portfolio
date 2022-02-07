import '@styles/topbar.styl';
import React from 'react';
import { Button } from '@scripts/base/components/button/button';
import { Container } from '@scripts/base/components/container/container';
import { Logo } from '@scripts/base/components/logo/logo';
import { Menu } from '@scripts/base/components/menu/menu';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

export const Topbar = ({ hideMenu }) => {
  return (
    <div className="r-topbar">
      <Container>
        {
          !hideMenu && (
            <Button
              iconName="menu"
              theme="faceless"
              ariaLabel="menu"
              onClick={() => sidebarState.toggle()}
              data-menu-button
            >
            </Button>
          )
        }
        <Logo />
        {!hideMenu && <Menu data-menu />}
      </Container>
    </div>
  )
}
