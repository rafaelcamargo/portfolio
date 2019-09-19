import '@styles/col.styl';
import React, { Component } from 'react';

export class RCol extends Component {
  constructor(props = {}){
    super(props);
    this.state = { className: buildClassName(props.size) };
  }
  render() {
    return (
      <div className={ this.state.className }>
        { this.props.children }
      </div>
    );
  }
}

function buildClassName(size){
  return `r-col ${buildSizeCssClass(size)}`.trim();
}

function buildSizeCssClass(size){
  return size ? `r-col-${size}` : '';
}
