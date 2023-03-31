import React from 'react';
import { Row, Col } from '@glorious/taslonic-react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { ToolList } from '@scripts/tools/components/tool-list/tool-list';

const meta = {
  title: 'Tools',
  description: 'This is a list of all tools I have used till now',
  keywords: 'tools, latest'
};

const CONTAINER_SIZE = 'sm';

export const Tools = () => {
  return (
    <Viewport
      title={ meta.title }
      description={ meta.description }
      keywords={ meta.keywords }
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title="Tools" size="small" containerSize={CONTAINER_SIZE} />
      <Section size="small" containerSize={CONTAINER_SIZE}>
        <Row>
          <Col xs="12">
            <ToolList />
          </Col>
        </Row>
      </Section>
    </Viewport>
  );
}
