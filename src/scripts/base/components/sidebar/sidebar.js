import '@styles/sidebar.styl';
import React, { Component } from 'react';
import { RIcon } from '@scripts/base/components/icon/icon';
import { RMenu } from '@scripts/base/components/menu/menu';

export class RSidebar extends Component {
  render() {
    return (
      <div className="r-sidebar">
        <div className="r-sidebar-header">
          <RIcon name="arrow" />
        </div>
        <div className="r-sidebar-body">
          <RMenu />
        </div>
      </div>
    );
  }
}
