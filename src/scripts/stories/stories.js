import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Hero } from '@scripts/base/components/hero/hero';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { RStoryGroup } from '@scripts/stories/components/story-group/story-group';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Stories',
  description: 'Writing is a craft that I\'m striving to learn. Once in a while, I dedicate some time to share a bit of the experience I\'m getting along the way.',
  keywords: 'components, reuse, webpack, environment variables, traps, event-driven programming'
};

export class Stories extends Component {
  render() {
    return (
      <Viewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <Hero title="Stories" size="small" />
        <Section>
          <Row >
            <Col size="12">
              <RStoryGroup title="Featured">
                <RStoryList featured={true} />
              </RStoryGroup>
              <RStoryGroup title="Everything Else">
                <RStoryList featured={false} />
              </RStoryGroup>
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
