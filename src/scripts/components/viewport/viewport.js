import React, { Component } from 'react';
import { RCol } from '@scripts/components/col/col';
import { RContainer } from '@scripts/components/container/container';
import { RRow } from '@scripts/components/row/row';

export class RViewport extends Component {
  render() {
    return (
      <main className="r-viewport">
        { this.props.children }
      </main>
    );
  }
}
