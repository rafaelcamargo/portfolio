import '@styles/sidebar.styl';
import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';
import { RMenu } from '@scripts/base/components/menu/menu';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

export class RSidebar extends Component {
  constructor(props){
    super(props);
    sidebarState.reset();
    this.state = { className: buildClassName({ visible: getSidebarVisibilityState() }) }
    this.unsubscribeSidebarState = sidebarState.store.subscribe(this.onSidebarStateChange);
  }

  onSidebarStateChange = () => {
    this.setState({
      className: buildClassName({ visible: getSidebarVisibilityState() })
    });
  };

  onHideSidebarButtonClick = () => {
    sidebarState.toggle();
  };

  componentWillUnmount(){
    this.unsubscribeSidebarState();
  }

  render() {
    return (
      <div className={ this.state.className }>
        <div className="r-sidebar-header">
          <RButton
            iconName="arrow"
            theme="faceless"
            onClick={ this.onHideSidebarButtonClick }
            data-hide-sidebar-button>
          </RButton>
        </div>
        <div className="r-sidebar-body">
          <RMenu />
        </div>
      </div>
    );
  }
}

function getSidebarVisibilityState(){
  const { visible } = sidebarState.store.getState();
  return visible;
}

function buildClassName({ visible }){
  return `r-sidebar ${buildVisibilityClassName(visible)}`.trim();
}

function buildVisibilityClassName(visible){
  return visible ? 'r-sidebar-visible' : '';
}
