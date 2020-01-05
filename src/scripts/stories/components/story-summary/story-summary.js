import '@styles/story-summary.styl';
import React, { Component } from 'react';
import { RImage } from '@scripts/base/components/image/image';

export class RStorySummary extends Component {
  constructor(props){
    super(props);
    this.setMainContent(props.summary[props.primaryLanguage]);
    this.setFooterContent(props.summary[props.secondaryLanguage]);
  }

  setMainContent = content => {
    this.mainContent = content;
  };

  setFooterContent = content => {
    this.footerContent = content;
  };

  render() {
    return (
      <div className="r-story-summary">
        { buildMain(this.props.summary, this.mainContent) }
        { buildFooter(this.footerContent, this.props.secondaryLanguage) }
      </div>
    );
  }
}

function buildMain({ image }, mainContent){
  return  <main>
            { buildHeader(image) }
            { buildTitle(mainContent) }
            <p>{ mainContent.description }</p>
          </main>;
}

function buildHeader(image){
  return image ?
    <div
      className="r-story-summary-header"
      data-story-summary-header>
      <RImage filename={ image.filename } alt={ image.alt } />
    </div> :
    null;
}

function buildTitle({ url, title }){
  return  <h2>
            <a
              href={ url.href } target={ url.target || '_self' }
              data-story-summary-title-link>
              { title }
            </a>
          </h2>;
}

function buildFooter(footerContent, secondaryLanguage){
  return footerContent ?
    <footer lang={ secondaryLanguage }>
      <h3 data-story-summary-footer-title>
        { buildFooterTitle(secondaryLanguage) }
      </h3>
      <a
        href={ footerContent.url.href }
        target={ footerContent.url.target }
        data-story-summary-footer-link>
        { footerContent.title }
      </a>
    </footer> :
    null;
}

function buildFooterTitle(language){
  return language == 'en' ? 'Read in english' : 'Leia em português';
}
