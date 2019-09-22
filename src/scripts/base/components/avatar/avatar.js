import '@styles/avatar.styl';
import React, { Component } from 'react';

export class RAvatar extends Component {
  render() {
    return (
      <div className="r-avatar">
        <img src={ buildImageUrl(this.props.image) } alt={ buildImageAlt(this.props.image) } />
      </div>
    );
  }
}

function buildImageUrl(image){
  return `images/${image}`;
}

function buildImageAlt(image){
  return image.split('.')[0].replace('-', ' ');
}
