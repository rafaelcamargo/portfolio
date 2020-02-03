import '@styles/recommendation.styl';
import React, { Component } from 'react';
import recommendationsService from '@scripts/recommendations/services/recommendations/recommendations';
import { RAvatar } from '@scripts/base/components/avatar/avatar';
import { RExternalLink } from '@scripts/base/components/external-link/external-link';

export class RRecommendation extends Component {
  constructor(props){
    super(props);
    this.state = { data: recommendationsService.get(this.props.id) }
  }
  render() {
    return (
      <div className="r-recommendation">
        <div className="r-recommendation-header">
          <div className="r-recommendation-avatars">
            <RAvatar image={ this.state.data.companyImage } />
            <RAvatar image={ this.state.data.personImage } />
          </div>
          <div className="r-recommendation-titles">
            <h2>
              {
                buildLink({
                  name: this.state.data.personName,
                  url: this.state.data.personUrl
                })
              }
            </h2>
            <h3>
              {
                buildCurrentCompanyInfo({
                  position: this.state.data.personPosition,
                  name: this.state.data.companyName,
                  url: this.state.data.companyUrl
                })
              }
              {
                buildFormerCompanyInfo({
                  name: this.state.data.formerCompanyName,
                  url: this.state.data.formerCompanyUrl
                })
              }
            </h3>
          </div>
        </div>
        <blockquote className="r-recommendation-body">
          <p>
            { this.state.data.content }
          </p>
        </blockquote>
      </div>
    );
  }
}

function buildCurrentCompanyInfo({ position, name, url }){
  return <span data-recommendation-current-company>{ position } at { buildLink({ name, url }) }</span>
}

function buildFormerCompanyInfo({ name, url }){
  return name ?
    <span data-recommendation-former-company>, former { buildLink({ name, url }) }</span> :
    null;
}

function buildLink({ name, url }){
  return <RExternalLink href={ url }>{ name }</RExternalLink>;
}
