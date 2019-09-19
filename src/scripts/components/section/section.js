import '@styles/section.styl';
import React, { Component } from 'react';

export class RSection extends Component {
  constructor(props = {}){
    super(props);
    this.state = { className: buildClassName(props.theme) };
  }
  render() {
    return (
      <div className={ this.state.className }>
        { this.props.children }
      </div>
    );
  }
}

function buildClassName(theme){
  return `r-section ${buildThemeCssClass(theme)}`.trim();
}

function buildThemeCssClass(theme){
  return theme == 'primary' ? 'r-section-primary' : '';
}
