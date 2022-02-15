import React from 'react';
import { ContactForm } from '@scripts/contact/components/contact-form/contact-form';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Contact',
  description: 'Send me a hello or follow me on social networks',
  keywords: 'email, github, dribbble, twitter'
};

const CONTAINER_SIZE = 'sm';

export const Contact = () => {
  return (
    <Viewport
      title={ meta.title }
      description={ meta.description }
      keywords={ meta.keywords }
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title="Contact" size="small" containerSize={CONTAINER_SIZE} />
      <Section containerSize={CONTAINER_SIZE}>
        <ContactForm />
      </Section>
    </Viewport>
  );
}
