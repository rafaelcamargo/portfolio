import '@styles/hero-link.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeroLink extends Component {
  onClick = evt => {
    const { onClick } = this.props;
    if(onClick)
      onClick(evt);
  }
  render() {
    return (
      <span className="r-hero-link">
        { buildLink(this.props, this.onClick) }
      </span>
    );
  }
}

function buildLink({ to, href, text }, onClick){
  return to ? buildRouterLink(to, text): buildAnchor(href, text, onClick);
}

function buildAnchor(href, text, onClick){
  return <a href={ href } onClick={ onClick } target="_blank">{ text }</a>;
}

function buildRouterLink(to, text){
  return <Link to={ to }>{ text }</Link>
}
