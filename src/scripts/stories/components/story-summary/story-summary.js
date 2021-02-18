import '@styles/story-summary.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@scripts/base/components/image/image';
import { Time } from '@scripts/base/components/time/time';

export class StorySummary extends Component {
  render() {
    const { url, created, lang, title, excerpt } = this.props.summary;
    return (
      <div className="r-story-summary" lang={ lang }>
        <main>
          <h2>
            { buildLink(url, title) }
          </h2>
          <Time dateTime={ created } lang={ lang } />
          <p>
            { handleExcerptLength(excerpt) }
          </p>
        </main>
      </div>
    );
  }
}

function buildLink({ href, target }, text){
  return isExternalLink(href) ? buildAnchor(href, target, text) : buildRouterLink(href, text);
}

function isExternalLink(href){
  return href.includes('http');
}

function buildAnchor(href, target = '_self', text){
  return (
    <a href={ href } target={ target } data-story-summary-title-link>
      { text }
    </a>
  );
}

function buildRouterLink(href, text){
  return <Link to={ href } data-story-summary-title-link>{ text }</Link>;
}

function handleExcerptLength(excerpt){
  return excerptIsLongerThanLimit(excerpt) ? limitExcerptLength(excerpt) : excerpt;
}

function excerptIsLongerThanLimit(excerpt){
  return excerpt.length > getMaxExcerptLength();
}

function getMaxExcerptLength(){
  return 200;
}

function limitExcerptLength(excerpt){
  return `${excerpt.substring(0, getMaxExcerptLength()).trim()}...`
}
