import '@styles/avatar.styl';
import React, { Component } from 'react';
import imagesService from '@scripts/base/services/images/images';

export class Avatar extends Component {
  render() {
    return (
      <div className="r-avatar">
        <img src={ buildImageUrl(this.props.image) } alt={ buildImageAlt(this.props.image) } />
      </div>
    );
  }
}

function buildImageUrl(image){
  return `${ imagesService.getBasePath() }/${image}`;
}

function buildImageAlt(image){
  return image.split('.')[0].replace('-', ' ');
}
