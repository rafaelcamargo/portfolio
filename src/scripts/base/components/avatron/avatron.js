import '@styles/avatron.styl';
import React, { Component } from 'react';
import { RAvatar } from '@scripts/base/components/avatar/avatar';
import { RBadge } from '@scripts/base/components/badge/badge';

export class RAvatron extends Component {
  render() {
    return (
      <div className="r-avatron">
        { buildAvatar(this.props.image) }
        <div className="r-avatron-titles">
          <h2>
            { buildTitle(this.props.title, this.props.url) }
          </h2>
          <h3>{ this.props.subtitle }{ buildBadge(this.props.badgeText) }</h3>
          { buildCaption(this.props.caption) }
        </div>
      </div>
    );
  }
}

function buildAvatar(image){
  return image ? <RAvatar image={ image } /> : null;
}

function buildTitle(title, url){
  return url ? <a href={ url } target="_blank">{ title }</a> : title;
}

function buildBadge(text){
  return text ? <RBadge>{ text }</RBadge> : null;
}

function buildCaption(caption){
  return caption ? <h4>{ caption }</h4> : null;
}
