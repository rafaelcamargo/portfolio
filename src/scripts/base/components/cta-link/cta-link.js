import '@styles/cta-link.styl';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';

export const CtaLink = ({ to, href, text }) => {
  return (
    <span className="r-cta-link">
      {buildLink(to, href, buildTextElement(text))}
    </span>
  );
}

function buildLink(to, href, text){
  return to ? buildRouteLink(to, text) : buildAnchorLink(href, text);
}

function buildTextElement(text){
  return (
    <span className="r-cta-link-text" data-cta-link-text>
      {text}
    </span>
  );
}

function buildRouteLink(to, text){
  return <Link to={to}>{text}{buildIcon()}</Link>;
}

function buildAnchorLink(href, text){
  return <a href={href} target="_blank" rel="noreferrer">{text}{buildIcon()}</a>;
}

function buildIcon(){
  return <Icon name="arrow" />;
}
