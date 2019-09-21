import '@styles/viewport.styl';
import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RContainer } from '@scripts/base/components/container/container';
import { RFooter } from '@scripts/base/components/footer/footer';
import { RRow } from '@scripts/base/components/row/row';
import { RSidebar } from '@scripts/base/components/sidebar/sidebar';
import { RTopbar } from '@scripts/base/components/topbar/topbar';

export class RViewport extends Component {
  render() {
    return (
      <main className="r-viewport">
        <RSidebar />
        <RTopbar />
        <article className="r-viewport-content">
          { this.props.children }
        </article>
        <RContainer>
          <RRow>
            <RCol size="12">
              <RFooter />
            </RCol>
          </RRow>
        </RContainer>
      </main>
    );
  }
}
