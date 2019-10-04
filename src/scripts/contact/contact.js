import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RContactMailCtaLink } from '@scripts/contact/components/contact-mail-cta-link/contact-mail-cta-link';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Contact',
  description: 'Send me a hello or follow me on social networks',
  keywords: 'email, github, dribbble, twitter'
};

export class Contact extends Component {
  render() {
    return (
      <RViewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <RHero title="Contact" size="small" />
        <RSection>
          <RRow>
            <RCol size="6">
              <RRow>
                <RCol size="12">
                  <h2>Send me a hello!</h2>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RContactMailCtaLink />
                </RCol>
              </RRow>
            </RCol>
            <RCol size="6">
              <RRow>
                <RCol size="12">
                  <h2>Follow me on the social networks</h2>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="4">
                  <RCtaLink
                    href="https://github.com/rafaelcamargo"
                    text="Github" />
                </RCol>
                <RCol size="4">
                  <RCtaLink
                    href="https://dribbble.com/rcamargo"
                    text="Dribbble" />
                </RCol>
                <RCol size="4">
                  <RCtaLink
                    href="https://twitter.com/rcamargo"
                    text="Twitter" />
                </RCol>
              </RRow>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
