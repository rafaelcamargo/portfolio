import '@styles/topbar.styl';
import React from 'react';
import { Container } from '@glorious/taslonic/react';
import { Button } from '@scripts/base/components/button/button';
import { Logo } from '@scripts/base/components/logo/logo';
import { Menu } from '@scripts/base/components/menu/menu';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

export const Topbar = ({ hideMenu, containerSize }) => {
  return (
    <div className="r-topbar">
      <Container size={containerSize}>
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
