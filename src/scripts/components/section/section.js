import '@styles/section.styl';
import React, { Component } from 'react';
import { RContainer } from '@scripts/components/container/container';

export class RSection extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(props.theme) };
  }
  render() {
    return (
      <section className={ this.state.className }>
        <RContainer>
          { this.props.children }
        </RContainer>
      </section>
    );
  }
}

function buildClassName(theme){
  return `r-section ${buildThemeCssClass(theme)}`.trim();
}

function buildThemeCssClass(theme){
  return theme == 'primary' ? 'r-section-primary' : '';
}
