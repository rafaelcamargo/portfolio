import '@styles/row.styl';
import React, { Component } from 'react';

const BASE_CLASS_NAME = 'r-row';

export class RRow extends Component {
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

function buildClassName({ align, offset }){
  const alignClass = buildAlignClassName(align);
  const offsetClass = buildOffsetClassName(offset);
  return `${BASE_CLASS_NAME} ${alignClass} ${offsetClass}`.trim();
}

function buildAlignClassName(align){
  switch (align) {
    case 'center':
      return `${BASE_CLASS_NAME}-center`;
    case 'right':
      return `${BASE_CLASS_NAME}-right`;
    default:
      return '';
  }
}

function buildOffsetClassName(offset){
  return offset >= 1 && offset <= 10 ? `${BASE_CLASS_NAME}-offset-${offset}` : '';
}
