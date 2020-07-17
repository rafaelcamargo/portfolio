import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';

export class Hero extends Component {
  render() {
    return (
      <div className="r-hero">
        <Section theme="primary" size={ this.props.size }>
          <Row>
            <Col size="12">
              { buildCustomContent(this.props.title, this.props.children) }
            </Col>
          </Row>
        </Section>
      </div>
    );
  }
}

function buildCustomContent(title, children){
  return title ? <h1>{ title }</h1>: children;
}
