import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RContactForm } from '@scripts/contact/components/contact-form/contact-form';
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
            <RCol size="12">
              <RContactForm />
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
