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
  return getItems().map(item => {
    return <li className="r-menu-item" key={ item.name }>
            <NavLink
              to={ item.path }
              activeClassName="r-menu-item-link-active"
              className="r-menu-item-link">
              { item.name }
            </NavLink>
          </li>;
  })
}

function getItems(){
  return [
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Recommendations', path: '/recommendations' },
    { name: 'Stories', path: '/stories' },
    { name: 'Influences', path: '/influences' },
    { name: 'Contact', path: '/contact' }
  ];
}
