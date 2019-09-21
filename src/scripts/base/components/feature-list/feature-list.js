import '@styles/feature-list.styl';
import React, { Component } from 'react';

const BASE_ITEM_CLASS_NAME = 'r-feature-list-item';

export class RFeatureList extends Component {
  render() {
    return (
      <ul className="r-feature-list">
        { buildItems(this.props.children, this.props.itemSize) }
      </ul>
    );
  }
}

function buildItems(children, itemSize){
  return children.map((child, index) => {
    return <li className={ buildItemClassName(itemSize) } key={ index }>{ child }</li>;
  });
}

function buildItemClassName(itemSize){
  return `${BASE_ITEM_CLASS_NAME} ${ buildItemSizeCssClass(itemSize) }`;
}

function buildItemSizeCssClass(itemSize){
  const prefix = `${BASE_ITEM_CLASS_NAME}-size`;
  switch (itemSize) {
    case '1-3':
      return `${prefix}-1-3`;
    case '1-2':
      return `${prefix}-1-2`;
    default:
      return `${prefix}-1-1`;
  }
}
