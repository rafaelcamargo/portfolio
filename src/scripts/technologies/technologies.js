import React from 'react';
import { Row, Col } from '@glorious/taslonic/react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { TechnologyList } from '@scripts/technologies/components/technology-list/technology-list';

const meta = {
  title: 'Technologies',
  description: 'This is a list of all technologies I have used till now',
  keywords: 'technologies, latest'
};

const CONTAINER_SIZE = 'sm';

export const Technologies = () => {
  return (
    <Viewport
      title={ meta.title }
      description={ meta.description }
      keywords={ meta.keywords }
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title="Technologies" size="small" containerSize={CONTAINER_SIZE} />
      <Section size="small" containerSize={CONTAINER_SIZE}>
        <Row offsetXs="4">
          <Col xs="12">
            <TechnologyList />
          </Col>
        </Row>
      </Section>
    </Viewport>
  );
}
