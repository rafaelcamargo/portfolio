import React from 'react';
import { Row, Col } from '@glorious/taslonic/react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { InfluencesList } from '@scripts/influences/components/influences-list/influences-list';

const meta = {
  title: 'Influences',
  description: 'Once in a while, I get asked what has influenced me most. Here is a list of things that have improved my life.',
  keywords: 'influences, books, videos, posts'
};

const CONTAINER_SIZE = 'sm';

export const Influences = () => {
  return (
    <Viewport
      title={ meta.title }
      description={ meta.description }
      keywords={ meta.keywords }
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title="Influences" size="small" containerSize={CONTAINER_SIZE} />
      <Section size="small" containerSize={CONTAINER_SIZE}>
        <Row>
          <Col xs="12">
            <p>
              Once in a while, I get asked what has influenced me most. I used
              to answer it individually by email, direct messages, and occasional
              chats. But my memory is a hard disk always requiring more space,
              so I ended up forgetting something. Then, I decided to put all
              the great things that have shaped the way I see the world in the
              following list. May these references surprise you as much as
              they have surprised me.
            </p>
          </Col>
        </Row>
        <Row offsetXs="4">
          <Col xs="12">
            <InfluencesList />
          </Col>
        </Row>
        <Row offsetXs="4">
          <Col xs="12">
            <CtaLink to="/reads" text="See my latest reads" />
          </Col>
        </Row>
      </Section>
    </Viewport>
  );
}
