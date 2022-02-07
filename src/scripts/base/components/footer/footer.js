import '@styles/footer.styl';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';

export const Footer = ({ showDivider }) => {
  return (
    <footer className="r-footer">
      {showDivider && <Icon name="circles" />}
      <div className="r-footer-content">
        <ul className="r-footer-links">
          {getLinks().map(({ to, text }, index) => (
            <li key={index}><h3><Link to={to}>{text}</Link></h3></li>
          ))}
        </ul>
        <p>
          This is an {buildExternalLink('https://github.com/rafaelcamargo/portfolio', 'open-source website')} based
          on {buildExternalLink('https://taslonic.com/', 'Taslonic components')}.
        </p>
      </div>
    </footer>
  );
}

function getLinks(){
  return [
    { to: '/skills', text: 'Skills' },
    { to: '/influences', text: 'Influences' },
    { to: '/contact', text: 'Contact' }
  ];
}

function buildExternalLink(href, text){
  return <a href={href} rel="noreferrer" target="_blank">{text}</a>;
}
