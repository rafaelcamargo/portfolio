import '@styles/footer.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import keywords from '@data/keywords';
import keywordsService from '@scripts/base/services/keywords/keywords';

export class RFooter extends Component {
  render() {
    return (
      <footer className="r-footer">
        <div
          className="r-footer-section r-footer-section-skills"
          data-footer-section-skills>
          <h4>Skills</h4>
          <div className="r-footer-keywords-container">
            { buildKeywords('skill') }
          </div>
        </div>
        <div
          className="r-footer-section r-footer-section-experience"
          data-footer-section-experience>
          <h4>Experience</h4>
          <div className="r-footer-keywords-container">
            { buildKeywords('experience') }
          </div>
        </div>
        <div
          className="r-footer-section r-footer-section-projects"
          data-footer-section-projects>
          <h4>Projects</h4>
          <div className="r-footer-keywords-container">
            { buildKeywords('project') }
          </div>
        </div>
        <div
          className="r-footer-section r-footer-section-social"
          data-footer-section-social>
          <h4>Social</h4>
          <div className="r-footer-keywords-container">
            { buildSocialKeywords(getSocialNetworks()) }
          </div>
        </div>
      </footer>
    );
  }
}

function buildKeywords(type){
  return keywordsService.get(type).map(keyword => {
    return buildKeywordCrumb(keyword.name, getKeywordUrl(keyword.type));
  });
}

function buildSocialKeywords(networks){
  const isExternalUrl = true;
  return networks.map(network => buildKeywordCrumb(network.name, network.url, { isExternalUrl }));
}

function buildKeywordCrumb(name, url, { isExternalUrl } = {}){
  return <span className="r-footer-keyword-crumb" key={name}>{ buildKeywordLink(name, url, isExternalUrl) }</span>;
}

function buildKeywordLink(name, url, isExternalUrl){
  return isExternalUrl ?
    <a href={ url } target="_blank">{ name }</a> :
    <Link to={ url }>{ name }</Link>;
}

function getKeywordUrl(keywordType){
  return getUrls().find(url => url.type === keywordType).url;
}

function getUrls(){
  return [
    { type: 'experience', url: '/experience' },
    { type: 'skill', url: '/skills' },
    { type: 'project', url: '/projects' }
  ];
}

function getSocialNetworks(){
  return [
    { name: 'Github', url: 'https://github.com/rafaelcamargo' },
    { name: 'Dribbble', url: 'https://dribbble.com/rcamargo' },
    { name: 'Twitter', url: 'https://twitter.com/rcamargo' }
  ];
}
