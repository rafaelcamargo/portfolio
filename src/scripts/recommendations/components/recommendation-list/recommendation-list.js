import '@styles/recommendation-list.styl';
import React, { Component } from 'react';

export class RRecommendationList extends Component {
  render() {
    return (
      <ul className="r-recommendation-list">
        { buildItems(this.props.children) }
      </ul>
    );
  }
}

function buildItems(children){
  return children.map((child, index) => {
    return <li className="r-recommendation-list-item" key={ index }>{ child }</li>;
  });
}
