import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';

export class RHero extends Component {
  render() {
    return (
      <div className="r-hero">
        <RSection theme="primary" size={ this.props.size }>
          <RRow>
            <RCol size="12">
              { buildCustomContent(this.props.title, this.props.children) }
            </RCol>
          </RRow>
        </RSection>
      </div>
    );
  }
}

function buildCustomContent(title, children){
  return title ? <h1>{ title }</h1>: children;
}
