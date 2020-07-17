import '@styles/button.styl';
import React, { Component } from 'react';
import { Icon } from '@scripts/base/components/icon/icon';

const BASE_CLASS_NAME = 'r-button';

export class Button extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(this.props.theme, this.props.block) }
  }
  render() {
    return (
      <button
        className={ this.state.className }
        onClick={ this.props.onClick }
        aria-label={ this.props.ariaLabel }
        type={ buildType(this.props) }>
        { buildIcon(this.props.iconName) } { buildLabel(this.props.children) }
      </button>
    );
  }
}

function buildClassName(theme, block){
  return [
    BASE_CLASS_NAME,
    buildThemeClassName(theme),
    buildBlockClassName(block)
  ].join(' ').trim();
}

function buildThemeClassName(theme){
  const prefix = `${BASE_CLASS_NAME}-theme`;
  return isThemeValid(theme) ? `${prefix}-${theme}` : '';
}

function buildBlockClassName(block){
  return block ? `${BASE_CLASS_NAME}-block` : '';
}

function isThemeValid(theme){
  return ['primary','link','faceless'].includes(theme);
}

function buildIcon(name){
  return name ? <Icon name={ name } /> : null;
}

function buildLabel(children){
  return children ? <span className="r-button-label">{ children }</span> : null;
}

function buildType({ type }){
  return type || 'button';
}
