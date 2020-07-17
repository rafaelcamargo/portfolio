import '@styles/icon.styl';
import React, { Component } from 'react';
import imagesService from '@scripts/base/services/images/images';

export class Icon extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: buildClassName(props.name),
      style: buildStyle(props.name)
    };
  }
  render() {
    return (
      <span className={ this.state.className } style={ this.state.style }></span>
    );
  }
}

function buildClassName(name){
  return `r-icon r-icon-${name}`;
}

function buildStyle(name){
  const maskImageValue = buildMaskImageValue(name);
  return {
    maskImage: maskImageValue,
    WebkitMaskImage: maskImageValue
  };
}

function buildMaskImageValue(name){
  return `url("${ imagesService.getBasePath() }/icon-${name}.svg")`;
}
