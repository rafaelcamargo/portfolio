import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRecommendation } from '@scripts/recommendations/components/recommendation/recommendation';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

export class Home extends Component {
  render() {
    return (
      <RViewport>
        <RHero title="My name is Rafael. I am an expert in building UI components." />
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
            <RCol size="6">
              <RRecommendation id="matias" />
            </RCol>
            <RCol size="6">
              <RRecommendation id="bruckheimer" />
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
            <RCol size="4">
              <RRow>
                <RCol size="12">
                  <h2>
                    Few time. Lots of impact.
                  </h2>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <p>
                    I started programming in 2013, not so long.<br />
                    But on this short period of time, I collaborated in activities
                    that generated a huge impact.
                  </p>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RCtaLink to="/experience" text="See my experience" />
                </RCol>
              </RRow>
            </RCol>
            <RCol size="4">
              <RRow>
                <RCol size="12">
                  <h2>
                    Building is the way I best learn.
                  </h2>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <p>
                    I am always full of new ideias.<br />
                    Building a side project is the way
                    I best learn something new.
                  </p>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RCtaLink to="/projects" text="See my projects" />
                </RCol>
              </RRow>
            </RCol>
            <RCol size="4">
              <RRow>
                <RCol size="12">
                  <h2>
                    A couple of stories to share.
                  </h2>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <p>
                    Writing is a craft that I'm striving to learn.<br />
                    Once in a while, I dedicate some time to share a bit of the
                    experience I'm getting along the way.
                  </p>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RCtaLink to="/stories" text="See my stories" />
                </RCol>
              </RRow>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
