import '@styles/home-hero.styl';
import React from 'react';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { ProjectFeaturedList } from '@scripts/projects/components/project-featured-list/project-featured-list';

export const HomeHero = () => {
  return (
    <div className="r-home-hero">
      <ProjectFeaturedList />
      <div className="r-home-hero-heading-wrapper">
        <h1>
          All those side projects are fully covered with automated tests.<br />
          My name is Rafael Camargo. I code, design, and believe it's quite
          possible to build very quickly software that works very well.
        </h1>
        <div className="r-home-hero-cta-link-wrapper">
          <CtaLink to="/projects" text="View all projects" />
        </div>
      </div>
    </div>
  )
}
