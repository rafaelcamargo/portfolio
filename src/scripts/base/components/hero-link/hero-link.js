import '@styles/hero-link.styl';
import React, { Component } from 'react';

export class RHeroLink extends Component {
  onClick = evt => {
    const { onClick } = this.props;
    if(onClick)
      onClick(evt);
  }
  render() {
    return (
      <span className="r-hero-link">
        <a href={ this.props.href } onClick={ this.onClick } target="_blank">
          { this.props.text }
        </a>
      </span>
    );
  }
}
