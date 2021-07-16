import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Hero } from '@scripts/base/components/hero/hero';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { InfluencesContent } from '@scripts/influences/components/influences-content/influences-content';

const meta = {
  title: 'Influences',
  description: 'Once in a while, friends and strangers ask me about what are the contents that have influenced me most. I used to answer them individually by email, direct messages, and occasional chats. But my memory is always like a hard disk requiring more space, so I decided to put all the great things that have shaped the way I see the world in the following list. I hope some of these references can surprise you the same way they have surprised me.',
  keywords: 'influences, books, videos, posts'
};

export class Influences extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Influences" size="small" />
        <Section>
          <Row>
            <Col size="12">
              <InfluencesContent />
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
