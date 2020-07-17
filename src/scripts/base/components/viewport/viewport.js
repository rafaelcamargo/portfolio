import '@styles/viewport.styl';
import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Container } from '@scripts/base/components/container/container';
import { Footer } from '@scripts/base/components/footer/footer';
import { Meta } from '@scripts/base/components/meta/meta';
import { Row } from '@scripts/base/components/row/row';
import { Sidebar } from '@scripts/base/components/sidebar/sidebar';
import { Topbar } from '@scripts/base/components/topbar/topbar';

export class Viewport extends Component {
  render() {
    return (
      <div className="r-viewport">
        <Meta
          title={ this.props.title }
          description={ this.props.description }
          keywords={ this.props.keywords }
          twitterCard={ this.props.twitterCard }
          image={ this.props.image }/>
        <header>
          <Sidebar />
          <Topbar />
        </header>
        <main>
          <article className="r-viewport-content" lang={this.props.lang || 'en'}>
            { this.props.children }
          </article>
          <Container>
            <Row>
              <Col size="12">
                <Footer />
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}
