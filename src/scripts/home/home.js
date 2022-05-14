import React from 'react';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { BlogFeaturedList } from '@scripts/blog/components/blog-featured-list/blog-featured-list';
import { HomeHero } from '@scripts/home/components/home-hero/home-hero';

export const Home = () => {
  return (
    <Viewport hideMenu showFooterDivider>
      <Section>
        <HomeHero />
      </Section>
      <Section>
        <BlogFeaturedList />
      </Section>
    </Viewport>
  );
}
