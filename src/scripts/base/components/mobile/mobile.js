import '@styles/mobile.styl'
import React, { Component } from 'react';
import { RIcon } from '@scripts/base/components/icon/icon';

export class RMobile extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={ buildClassName(this.props.screenshot) } style={ buildStyle(this.props.scale) }>
        <div className="r-mobile-topbar-container">
          <div className="r-mobile-topbar">
            <div className="r-mobile-topbar-content-left">
              <RIcon name="network" />
              <RIcon name="wifi" />
            </div>
            <div className="r-mobile-topbar-content-center">
              15:14
            </div>
            <div className="r-mobile-topbar-content-right">
              <RIcon name="battery" />
            </div>
          </div>
        </div>
        <div className="r-mobile-body-container">
          { buildImage(this.props.screenshot) }
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

function buildImage(screenshot){
  const url = buildImageUrl(screenshot);
  const alt = buildImageAlt(screenshot);
  return screenshot ? <img src={ url } alt={ alt } /> : null;
}

function buildImageUrl(screenshot){
  return `images/screenshot-${screenshot}`;
}

function buildImageAlt(screenshot){
  const name = removeScreenshotExtension(screenshot).replace(/-/g, ' ');
  return `screenshot ${name}`;
}

function removeScreenshotExtension(screenshot = ''){
  return screenshot.split('.')[0];
}
