import React from 'react';
import { Row, Col } from '@glorious/taslonic-react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { ReadList } from '@scripts/reads/components/read-list/read-list';

const meta = {
  title: 'Reads',
  description: 'This is a list of my latest reads.',
  keywords: 'reads, latest'
};

const CONTAINER_SIZE = 'sm';

export const Reads = () => {
  return (
    <Viewport
      title={ meta.title }
      description={ meta.description }
      keywords={ meta.keywords }
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title="Reads" size="small" containerSize={CONTAINER_SIZE} />
      <Section size="small" containerSize={CONTAINER_SIZE}>
        <Row>
          <Col xs="12">
            <ReadList />
          </Col>
        </Row>
        <Row offsetXs="4">
          <Col xs="12">
            <CtaLink href="/blog/l/en-US/" text="Read my articles" />
          </Col>
        </Row>
      </Section>
    </Viewport>
  );
}
