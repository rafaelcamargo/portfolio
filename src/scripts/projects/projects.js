import React, { Component } from 'react';
import { Avatron } from '@scripts/base/components/avatron/avatron';
import { Col } from '@scripts/base/components/col/col';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { ProjectList } from '@scripts/projects/components/project-list/project-list';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Projects',
  description: 'I am always full of new ideias. Building a side project is the way I best learn something new.',
  keywords: 'teleflik, nashios, hiphunt'
};

export class Projects extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Projects" size="small" />
        <Section>
          <Row>
            <Col size="12">
              <ProjectList />
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
