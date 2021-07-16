import ENV from '@environment';
import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import imagesService from '@scripts/base/services/images/images';

export class Meta extends Component {
  render() {
    return (
      <MetaTags>
        <title>{ this.props.title }</title>
        <meta name="description" content={ this.props.description } />
        <meta name="keywords" content={ this.props.keywords } />
        <meta name="twitter:card" content={ this.props.twitterCard } />
        <meta name="twitter:title" content={ this.props.title } />
        <meta name="twitter:description" content={ this.props.description } />
        <meta name="twitter:site" content="@rcamargo" />
        <meta name="twitter:creator" content="@rcamargo" />
        <meta property="og:title" content={ this.props.title } />
        <meta property="og:image" content={ buildImageUrl(this.props.image) } />
      </MetaTags>
    );
  }
}

function buildImageUrl(image){
  const filepath = ENV.APP.BASE_URL + imagesService.getBasePath();
  return `${filepath}/${image}`;
}

Meta.defaultProps = {
  title: 'Rafael Camargo',
  description: 'My name is Rafael. I am an expert in building UI components.',
  keywords: 'rafael, camargo, programmer, designer',
  image: 'portfolio-logo-256x256.png',
  twitterCard: 'summary'
};
