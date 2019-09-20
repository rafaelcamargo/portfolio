import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';

export class RHero extends Component {
  render() {
    return (
      <div className="r-hero">
        <RSection theme="primary">
          <RRow>
            <RCol size="6">
              <h1>{ this.props.title }</h1>
            </RCol>
            { buildCustomContent(this.props.children) }
          </RRow>
        </RSection>
      </div>
    );
  }
}

function buildCustomContent(children){
  return children ? <RCol size="6">{ children }</RCol> : null;
}
