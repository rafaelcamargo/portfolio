import React from 'react';
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
        <p>
          One of the greatest Brazilian songwriters is not just a songwriter.
          She also composes, sings and plays. Marisa Monte masters the creative
          process from idea to production. Her work is astonishing because
          she knows profoundly every detail of the whole.
        </p>
        <p>
          Splitting user interface development between design and programming
          roles is a mistake. Isolated in their specializations, both are
          incapable of understanding the whole. A messy interface makes
          excellent code useless. A messy code makes impressive interfaces
          buggy.
        </p>
        <p>
          Before becoming a programmer, I worked as a graphic designer for
          over seven years. I created logotypes, packages, websites,
          advertising and animations. My biggest skill as a programmer is
          not to be a programmer only.
        </p>
        <p>
          Clean code is as important as clean interfaces. SOLID principles
          are as valuable as Gestalt principles. I code considering design.
          I design considering code. I know profoundly every detail of the whole.
        </p>
      </Section>
    </Viewport>
  )
}
