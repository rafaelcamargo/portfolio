import '@styles/viewport.styl';
import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RContainer } from '@scripts/base/components/container/container';
import { RFooter } from '@scripts/base/components/footer/footer';
import { RMeta } from '@scripts/base/components/meta/meta';
import { RRow } from '@scripts/base/components/row/row';
import { RSidebar } from '@scripts/base/components/sidebar/sidebar';
import { RTopbar } from '@scripts/base/components/topbar/topbar';

export class RViewport extends Component {
  render() {
    return (
      <div className="r-viewport">
        <RMeta
          title={ this.props.title }
          description={ this.props.description }
          keywords={ this.props.keywords }
          twitterCard={ this.props.twitterCard }
          image={ this.props.image }/>
        <header>
          <RSidebar />
          <RTopbar />
        </header>
        <main>
          <article className="r-viewport-content" lang={this.props.lang || 'en'}>
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
      </div>
    );
  }
}
