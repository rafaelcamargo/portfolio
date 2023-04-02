import React from 'react';
import { Row, Col } from '@glorious/taslonic-react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Skills',
  description: 'Before becoming a programmer, I worked as a graphic designer for over seven years. I created logotypes, packages, websites, advertising and animations. My biggest skill as a programmer is not to be a programmer only',
  keywords: 'design, programming, clean code, clean interfaces, SOLID, Gestalt'
};

const CONTAINER_SIZE = 'sm';

export const Skills = () => {
  return (
    <Viewport
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title="Skills" size="small" containerSize={CONTAINER_SIZE} />
      <Section containerSize={CONTAINER_SIZE} size="small">
        <Row>
          <Col xs="12">
            <p>
              One of the greatest Brazilian songwriters is not just a songwriter.
              She also composes, sings and plays. Marisa Monte masters the creative
              process from idea to production. Her work is astonishing because
              she knows profoundly every detail present in the whole.
            </p>
            <p>
              Splitting user interface development between design and programming
              roles is a mistake. Isolated in their specializations, both are
              incapable of understanding the whole. A messy interface makes
              excellent code useless. A messy code makes delightful interfaces
              disappointing.
            </p>
            <p>
              Before becoming a software developer, I worked as a graphic designer for
              over seven years. I created logotypes, packages, websites,
              advertisements, and animations. My biggest skill as a programmer
              is not to be a programmer only.
            </p>
            <p>
              Clean code isn't less important than clean interfaces. SOLID
              principles are as valuable as Gestalt principles. I code without
              forgetting the importance of good design and design without
              forgetting the importance of good code. I know profoundly every
              detail present in the whole.
            </p>
          </Col>
        </Row>
        <Row offsetXs="4">
          <Col xs="12">
            <CtaLink to="/tools" text="See my toolbox" />
          </Col>
        </Row>
      </Section>
    </Viewport>
  )
}
