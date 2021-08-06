import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { Feature } from '@scripts/base/components/feature/feature';
import { FeatureList } from '@scripts/base/components/feature-list/feature-list';
import { HomeHero } from '@scripts/home/components/home-hero/home-hero';
import { Recommendation } from '@scripts/recommendations/components/recommendation/recommendation';
import { RecommendationList } from '@scripts/recommendations/components/recommendation-list/recommendation-list';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

export class Home extends Component {
  render() {
    return (
      <Viewport
        image="portfolio-banner-1014x530.png"
        twitterCard="summary_large_image">
        <HomeHero />
        <Section>
          <Row align="center">
            <Col size="12">
              <Row>
                <Col size="12">
                  <h2>
                    Principles over technology
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <p>
                    I love to use great principles and the best technologies
                    to solve complex interface challenges.
                  </p>
                </Col>
              </Row>
              <Row offset="5">
                <Col size="12">
                  <CtaLink to="/skills" text="See my skills" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        <Section theme="primary">
          <Row>
            <Col size="12">
              <RecommendationList>
                <Recommendation id="matias" />
                <Recommendation id="bruckheimer" />
              </RecommendationList>
            </Col>
          </Row>
          <Row align="center" offset="10">
            <Col size="12">
              <CtaLink to="/recommendations" text="Read all recommendations" />
            </Col>
          </Row>
        </Section>
        <Section>
          <Row>
            <Col size="12">
              <FeatureList itemSize="1-3">
                <Feature
                  title="Building is the way I best learn."
                  ctaTo="/projects"
                  ctaText="See my projects">
                  <p>
                    I am always full of new ideas.<br />
                    Building a side project is the way
                    I best learn something new.
                  </p>
                </Feature>
                <Feature
                  title="Short time. Long-term results."
                  ctaTo="/experience"
                  ctaText="See my experience">
                  <p>
                    I started programming in 2013, not so long.<br />
                    But in this short period, I collaborated in activities
                    that caused a great impact.
                  </p>
                </Feature>
                <Feature
                  title="Some stories to share."
                  ctaHref="/blog/l/en-US"
                  ctaText="See my stories">
                  <p>
                    Writing is a craft that I'm striving to learn.<br />
                    Once in a while, I write about the experiences I'm getting
                    along the way.
                  </p>
                </Feature>
              </FeatureList>
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
