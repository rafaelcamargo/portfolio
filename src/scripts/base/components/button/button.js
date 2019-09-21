import '@styles/button.styl';
import React, { Component } from 'react';
import { RIcon } from '@scripts/base/components/icon/icon';

const BASE_CLASS_NAME = 'r-button';

export class RButton extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(this.props.theme) }
  }
  render() {
    return (
      <button className={ this.state.className } onClick={ this.props.onClick }>
        { buildIcon(this.props.iconName) } { buildLabel(this.props.children) }
      </button>
    );
  }
}

function buildClassName(theme){
  return `${BASE_CLASS_NAME} ${buildThemeClassName(theme)}`.trim();
}

function buildThemeClassName(theme){
  const prefix = `${BASE_CLASS_NAME}-theme`;
  switch (theme) {
    case 'faceless':
      return `${prefix}-faceless`;
    default:
      return ''
  }
}

function buildIcon(name){
  return name ? <RIcon name={ name } /> : null;
}

function buildLabel(children){
  return children ? <span className="r-button-label">{ children }</span> : null;
}
