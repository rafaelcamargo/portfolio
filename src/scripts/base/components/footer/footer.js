import '@styles/footer.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Credits } from '@scripts/base/components/credits/credits';
import keywords from '@scripts/base/constants/keywords';
import keywordsService from '@scripts/base/services/keywords/keywords';
import routeService from '@scripts/base/services/route/route';

export class Footer extends Component {
  render() {
    return (
      <footer className="r-footer">
        <div
          className="r-footer-section r-footer-section-skills"
          data-footer-section-skills>
          <h3>Skills</h3>
          <div className="r-footer-keywords-container">
            { buildKeywords('skill') }
          </div>
        </div>
        <div
          className="r-footer-section r-footer-section-projects"
          data-footer-section-projects>
          <h3>Projects</h3>
          <div className="r-footer-keywords-container">
            { buildKeywords('project') }
          </div>
        </div>
        <div
          className="r-footer-section r-footer-section-experience"
          data-footer-section-experience>
          <h3>Experience</h3>
          <div className="r-footer-keywords-container">
            { buildKeywords('experience') }
          </div>
        </div>
        <div
          className="r-footer-section r-footer-section-social"
          data-footer-section-social>
          <h3>Social</h3>
          <div className="r-footer-keywords-container">
            { buildSocialKeywords(getSocialNetworks()) }
          </div>
        </div>
        <div className="r-footer-section r-footer-section-credits">
          <Credits />
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
  return !isExternalUrl ? buildInternalLink(url, name) : <a href={ url } target="_blank">{ name }</a>;
}

function buildInternalLink(url, name){
  const style = shouldAvoidClick(url) ? { pointerEvents: 'none' } : {};
  return <Link to={ url } style={ style }>{ name }</Link>
}

function shouldAvoidClick(url){
  return routeService.getCurrentPathname() === url;
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
