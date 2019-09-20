import React, { Component } from 'react';
import { RCol } from '@scripts/components/col/col';
import { RCtaLink } from '@scripts/components/cta-link/cta-link';
import { RHero } from '@scripts/components/hero/hero';
import { RRow } from '@scripts/components/row/row';
import { RSection } from '@scripts/components/section/section';
import { RViewport } from '@scripts/components/viewport/viewport';

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
