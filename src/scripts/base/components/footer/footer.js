import '@styles/footer.styl';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';

export const Footer = () => {
  return (
    <footer className="r-footer">
      <div className="r-footer-content">
        <ul className="r-footer-links">
          {getLinks().map(({ to, text }, index) => (
            <li key={index}><h3><Link to={to}>{text}</Link></h3></li>
          ))}
        </ul>
        <p>
        This website doesn’t use cookies, and 
        its {buildExternalLink('https://plausible.io/rafaelcamargo.com?period=30d', 'analytics')} are
        public.
        </p>
      </div>
    </footer>
  );
}

function getLinks(){
  return [
    { to: '/hello', text: 'Hello' },
    { to: '/skills', text: 'Skills' },
    { to: '/influences', text: 'Influences' },
    { to: '/contact', text: 'Contact' }
  ];
}

function buildExternalLink(href, text){
  return <a href={href} rel="noreferrer" target="_blank">{text}</a>;
}
