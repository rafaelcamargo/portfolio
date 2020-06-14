import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RFeature } from '@scripts/base/components/feature/feature';
import { RFeatureList } from '@scripts/base/components/feature-list/feature-list';
import { RHomeHero } from '@scripts/home/components/home-hero/home-hero';
import { RRecommendation } from '@scripts/recommendations/components/recommendation/recommendation';
import { RRecommendationList } from '@scripts/recommendations/components/recommendation-list/recommendation-list';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

export class Home extends Component {
  render() {
    return (
      <RViewport
        image="portfolio-banner-1014x530.png"
        twitterCard="summary_large_image">
        <RHomeHero />
        <RSection>
          <RRow align="center">
            <RCol size="12">
              <RRow>
                <RCol size="12">
                  <h2>
                    Principles over technology
                  </h2>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <p>
                    I love to use great principles and the best technologies
                    to solve complex UI challenges.
                  </p>
                </RCol>
              </RRow>
              <RRow offset="5">
                <RCol size="12">
                  <RCtaLink to="/skills" text="See my skills" />
                </RCol>
              </RRow>
            </RCol>
          </RRow>
        </RSection>
        <RSection theme="primary">
          <RRow>
            <RCol size="12">
              <RRecommendationList>
                <RRecommendation id="matias" />
                <RRecommendation id="bruckheimer" />
              </RRecommendationList>
            </RCol>
          </RRow>
          <RRow align="center" offset="10">
            <RCol size="12">
              <RCtaLink to="/recommendations" text="Read all recommendations" />
            </RCol>
          </RRow>
        </RSection>
        <RSection>
          <RRow>
            <RCol size="12">
              <RFeatureList itemSize="1-3">
                <RFeature
                  title="Building is the way I best learn."
                  ctaTo="/projects"
                  ctaText="See my projects">
                  <p>
                    I am always full of new ideias.<br />
                    Building a side project is the way
                    I best learn something new.
                  </p>
                </RFeature>
                <RFeature
                  title="Few time. Lots of impact."
                  ctaTo="/experience"
                  ctaText="See my experience">
                  <p>
                    I started programming in 2013, not so long.<br />
                    But on this short period, I collaborated in activities
                    that generated a huge impact.
                  </p>
                </RFeature>
                <RFeature
                  title="A couple of stories to share."
                  ctaTo="/stories"
                  ctaText="See my stories">
                  <p>
                    Writing is a craft that I'm striving to learn.<br />
                    Once in a while, I dedicate some time to share a bit of the
                    experience I'm getting along the way.
                  </p>
                </RFeature>
              </RFeatureList>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
