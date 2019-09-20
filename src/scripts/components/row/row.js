import '@styles/row.styl';
import React, { Component } from 'react';

const BASE_CLASS_NAME = 'r-row';

export class RRow extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(props.align) };
  }
  render() {
    return (
      <div className={ this.state.className }>
        { this.props.children }
      </div>
    );
  }
}

function buildClassName(align){
  return `${BASE_CLASS_NAME} ${buildAlignClassName(align)}`.trim();
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
