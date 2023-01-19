import React from 'react';
import { Row, Col } from '@glorious/taslonic/react';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Hello',
  description: 'My name is Rafael, I\'m based in Joinville (Brazil), and am glad for your visit. After have worked more than seven years as graphic designer, I have have been working since 2013 as software developer.',
  keywords: 'Rafael, software development, graphic design, front-end'
};

const CONTAINER_SIZE = 'sm';

export const Hello = () => {
  return (
    <Viewport
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      topbarContainerSize={CONTAINER_SIZE}
      hideMenu>
      <Hero title={meta.title} size="small" containerSize={CONTAINER_SIZE} />
      <Section containerSize={CONTAINER_SIZE} size="small">
        <Row>
          <Col xs="12">
            <p>
              My name is Rafael. I'm based in Joinville - Brazil, and I'm glad
              for your visit.
            </p>
            <p>
              After having worked for more than seven years as a
              graphic designer, I have been working since 2013 as a
              software developer.
            </p>
            <p>
              Currently, I am involved in some projects:
            </p>
            <ul>
              <li>
                Working as a front-end developer at <a href="https://www.rdstation.com/en/">
                RD Station</a>.
              </li>
              <li>
                Maintaining open-source projects: <a href="https://glorious.codes/demo">
                Glorious Demo</a>, <a href="https://pitsby.com/">Pitsby</a>, and <a href="https://taslonic.com/">
                Taslonic</a>.
              </li>
              <li>
                Polishing an open-source project to be launched soon: <a href="https://github.com/glorious-codes/glorious-triven">
                Triven</a>.
              </li>
              <li>
                Curating a collaborative list of companies that work <a href="https://4dayweek.rafaelcamargo.com/">
                four days a week</a>.
              </li>
            </ul>
            <p>
              Contact me or stay in the loop of my updates through:
            </p>
            <ul>
              <li>
                <a href="/contact">Email</a>
              </li>
              <li>
                <a href="https://tinyletter.com/rafaelcamargo">Newsletter</a>
              </li>
              <li>
                <a href="https://github.com/rafaelcamargo">Github</a>
              </li>
              <li>
                <a href="https://dribbble.com/rcamargo">Dribble</a>
              </li>
              <li>
                <a href="https://www.behance.net/rafaelcamargo">Behance</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Section>
    </Viewport>
  )
}
