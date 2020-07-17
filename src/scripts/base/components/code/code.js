import 'highlight.js/styles/atelier-lakeside-light.css';
import '@styles/code.styl';
import Highlight from 'react-highlight';
import React, { Component } from 'react';

export class Code extends Component {
  render() {
    return (
      <div className="r-code">
        <Highlight className={ this.props.language }>
          { this.props.children }
        </Highlight>
      </div>
    );
  }
}
