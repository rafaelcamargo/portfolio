import React, { Component } from 'react';
import imagesService from '@scripts/base/services/images/images';

export class RImage extends Component {
  render() {
    return (
      <img
        className="r-image"
        src={ buildImageUrl(this.props.filename) }
        alt={ this.props.alt }
      />
    );
  }
}

function buildImageUrl(filename){
  return `${ imagesService.getBasePath() }/${filename}`;
}
