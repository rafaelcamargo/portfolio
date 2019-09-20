import '@styles/col.styl';
import React, { Component } from 'react';

const BASE_CLASS_NAME = 'r-col';

export class RCol extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(props) };
  }
  render() {
    return (
      <div className={ this.state.className }>
        { this.props.children }
      </div>
    );
  }
}

function buildClassName({ size, offset }){
  const sizeClass = buildSizeCssClass(size);
  const offsetClass = buildOffsetCssClass(offset);
  return `${BASE_CLASS_NAME} ${sizeClass} ${offsetClass}`.trim();
}

function buildSizeCssClass(size){
  return size >= 1 && size <= 12 ? `${BASE_CLASS_NAME}-${size}` : '';
}

function buildOffsetCssClass(offset){
  return offset >= 1 && offset <= 11 ? `${BASE_CLASS_NAME}-offset-${offset}` : '';
}
