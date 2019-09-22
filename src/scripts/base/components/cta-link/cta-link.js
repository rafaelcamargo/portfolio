import '@styles/cta-link.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RIcon } from '@scripts/base/components/icon/icon';

export class RCtaLink extends Component {
  render() {
    return (
      <span className="r-cta-link">
        { buildLink(this.props.to, this.props.href, buildText(this.props.text)) }
      </span>
    );
  }
}

function buildLink(to, href, text){
  const arrow = <RIcon name="arrow" />;
  return to ?
    <Link to={ to }>{ text }{ arrow }</Link> :
    <a href={ href } target="_blank">{ text }{ arrow }</a>;
}

function buildText(text){
  return  <span className="r-cta-link-text" data-cta-link-text>
            { text }
          </span>;
}
