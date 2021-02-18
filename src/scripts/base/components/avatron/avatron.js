import '@styles/avatron.styl';
import React, { Component } from 'react';
import { Avatar } from '@scripts/base/components/avatar/avatar';
import { Badge } from '@scripts/base/components/badge/badge';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';

export class Avatron extends Component {
  render() {
    return (
      <div className="r-avatron">
        { buildAvatar(this.props.image) }
        <div className="r-avatron-titles">
          <h2>
            { buildTitle(this.props.title, this.props.url) }
          </h2>
          <div className="r-avatron-subtitle" data-avatron-subtitle>
            { this.props.subtitle }{ buildBadge(this.props.badgeText) }
          </div>
          { buildCaption(this.props.caption) }
        </div>
      </div>
    );
  }
}

function buildAvatar(image){
  return image ? <Avatar image={ image } /> : null;
}

function buildTitle(title, url){
  return url ? <ExternalLink href={ url }>{ title }</ExternalLink> : title;
}

function buildBadge(text){
  return text ? <Badge>{ text }</Badge> : null;
}

function buildCaption(caption){
  return caption ? <div className="r-avatron-caption" data-avatron-caption>{ caption }</div> : null;
}
