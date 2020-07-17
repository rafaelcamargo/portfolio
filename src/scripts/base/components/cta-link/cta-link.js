import '@styles/cta-link.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';

export class CtaLink extends Component {
  render() {
    return (
      <span className="r-cta-link">
        { buildLink(this.props.to, this.props.href, this.props.onClick, buildText(this.props.text)) }
      </span>
    );
  }
}

function buildLink(to, href, onClick, text){
  const arrow = <Icon name="arrow" />;
  return to ?
    <Link to={ to }>{ text }{ arrow }</Link> :
    <a href={ href } target="_blank" onClick={ onClick }>{ text }{ arrow }</a>;
}

function buildText(text){
  return  <span className="r-cta-link-text" data-cta-link-text>
            { text }
          </span>;
}
