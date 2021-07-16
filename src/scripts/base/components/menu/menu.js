import '@styles/menu.styl';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <nav className="r-menu">
        <ul className="r-menu-list">
          { buildItemElements() }
        </ul>
      </nav>
    );
  }
}

function buildItemElements(){
  const className = getMenuItemClassName();
  return getItems().map(item => {
    return <li className="r-menu-item" key={ item.name }>
            {
              item.to ? (
                <NavLink
                  to={ item.to }
                  activeClassName="r-menu-item-link-active"
                  className={className}>
                  { item.name }
                </NavLink>
              ) : (
                <a href={item.path} className={className}>{item.name}</a>
              )
            }
          </li>;
  })
}

function getItems(){
  return [
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Experience', to: '/experience' },
    { name: 'Recommendations', to: '/recommendations' },
    { name: 'Blog', path: '/blog' },
    { name: 'Influences', to: '/influences' },
    { name: 'Contact', to: '/contact' }
  ];
}

function getMenuItemClassName(){
  return 'r-menu-item-link';
}
