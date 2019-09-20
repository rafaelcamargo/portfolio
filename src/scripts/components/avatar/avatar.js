import '@styles/avatar.styl';
import React, { Component } from 'react';

export class RAvatar extends Component {
  constructor(props){
    super(props);
    this.state = { style: buildStyle(props.image) };
  }
  render() {
    return (
      <div className="r-avatar" style={ this.state.style } ></div>
    );
  }
}

function buildStyle(image){
  return image ? { backgroundImage: `url("images/${image}")` } : '';
}
