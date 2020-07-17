import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RContactForm } from '@scripts/contact/components/contact-form/contact-form';
import { Hero } from '@scripts/base/components/hero/hero';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Contact',
  description: 'Send me a hello or follow me on social networks',
  keywords: 'email, github, dribbble, twitter'
};

export class Contact extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Contact" size="small" />
        <Section>
          <Row>
            <Col size="12">
              <RContactForm />
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
