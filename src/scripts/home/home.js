import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RHero } from '@scripts/base/components/hero/hero';
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
      </RViewport>
    );
  }
}
