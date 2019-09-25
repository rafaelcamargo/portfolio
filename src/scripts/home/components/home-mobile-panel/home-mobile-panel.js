import '@styles/home-mobile-panel.styl'
import React, { Component } from 'react';
import { RMobile } from '@scripts/base/components/mobile/mobile';

export class RHomeMobilePanel extends Component {
  constructor(props){
    super(props);
    this.setScreenshotsCount(0);
    this.state = { className: 'r-home-mobile-panel' };
  }
  onScreenshotLoad(){
    if(this.screenshotsCount > 0)
      this.setState({ className: 'r-home-mobile-panel r-home-mobile-panel-visible' });
    else
      this.incrementScreenshotCounter();
  }
  incrementScreenshotCounter(){
    this.setScreenshotsCount(this.screenshotsCount + 1);
  }
  setScreenshotsCount(count){
    this.screenshotsCount = count;
  }
  render() {
    return (
      <div className={ this.state.className }>
        <RMobile screenshot="pitsby.svg" onScreenshotLoad={ this.onScreenshotLoad.bind(this) } />
        <RMobile screenshot="nashios.svg" onScreenshotLoad={ this.onScreenshotLoad.bind(this) } />
      </div>
    );
  }
}
