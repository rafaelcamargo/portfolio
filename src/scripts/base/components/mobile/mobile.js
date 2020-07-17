import '@styles/mobile.styl'
import React, { Component } from 'react';
import { Icon } from '@scripts/base/components/icon/icon';
import imagesService from '@scripts/base/services/images/images';

export class Mobile extends Component {
  onScreenshotLoad(){
    const onLoad = this.props.onScreenshotLoad;
    if(onLoad)
      onLoad();
  }
  render() {
    return (
      <div
        className={ buildClassName(this.props.screenshot) }
        style={ buildStyle(this.props.scale) }>
        <div className="r-mobile-topbar-container">
          <div className="r-mobile-topbar">
            <div className="r-mobile-topbar-content-left">
              <Icon name="network" />
              <Icon name="wifi" />
            </div>
            <div className="r-mobile-topbar-content-center">
              15:14
            </div>
            <div className="r-mobile-topbar-content-right">
              <Icon name="battery" />
            </div>
          </div>
        </div>
        <div className="r-mobile-body-container">
          { buildImage(this.props.screenshot, this.onScreenshotLoad.bind(this)) }
        </div>
      </div>
    );
  }
}

function buildClassName(screenshot){
  const prefix = 'r-mobile';
  const name = removeScreenshotExtension(screenshot);
  return name ? `${prefix} ${prefix}-${name}` : prefix;
}

function buildStyle(scale){
  return scale ? { transform: `scale(${scale})` } : {};
}

function buildImage(screenshot, onLoad){
  const url = buildImageUrl(screenshot);
  const alt = buildImageAlt(screenshot);
  return screenshot ? <img src={ url } alt={ alt } onLoad={ onLoad } /> : null;
}

function buildImageUrl(screenshot){
  return `${ imagesService.getBasePath() }/screenshot-${screenshot}`;
}

function buildImageAlt(screenshot){
  const name = removeScreenshotExtension(screenshot).replace(/-/g, ' ');
  return `screenshot ${name}`;
}

function removeScreenshotExtension(screenshot = ''){
  return screenshot.split('.')[0];
}
