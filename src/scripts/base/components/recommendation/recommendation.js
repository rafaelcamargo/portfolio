import '@styles/recommendation.styl';
import React, { Component } from 'react';
import { RAvatar } from '@scripts/base/components/avatar/avatar';

export class RRecommendation extends Component {
  render() {
    return (
      <div className="r-recommendation">
        <div className="r-recommendation-header">
          <div className="r-recommendation-avatars">
            <RAvatar image={ this.props.companyImage } />
            <RAvatar image={ this.props.personImage } />
          </div>
          <div className="r-recommendation-titles">
            <h3>
              { this.props.personName }
            </h3>
            <h4>
              {
                buildCurrentCompanyInfo({
                  position: this.props.personPosition,
                  name: this.props.companyName,
                  url: this.props.companyUrl
                })
              }
              {
                buildFormerCompanyInfo({
                  name: this.props.formerCompanyName,
                  url: this.props.formerCompanyUrl
                })
              }
            </h4>
          </div>
        </div>
        <div className="r-recommendation-body">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function buildCurrentCompanyInfo({ position, name, url }){
  return <span data-recommendation-current-company>{ position } at { buildCompanyLink({ name, url }) }</span>
}

function buildFormerCompanyInfo({ name, url }){
  return name ?
    <span data-recommendation-former-company>, formerly { buildCompanyLink({ name, url }) }</span> :
    null;
}

function buildCompanyLink({ name, url }){
  return <a href={ url } target="_blank">{ name }</a>;
}
