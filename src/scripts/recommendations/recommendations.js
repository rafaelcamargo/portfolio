import React, { Component } from 'react';
import { Col } from '@scripts/base/components/col/col';
import { Hero } from '@scripts/base/components/hero/hero';
import { Recommendation } from '@scripts/recommendations/components/recommendation/recommendation';
import { RecommendationList } from '@scripts/recommendations/components/recommendation-list/recommendation-list';
import { Row } from '@scripts/base/components/row/row';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Recommendations',
  description: 'I had the privilege to work with awesome developers. I am very proud to be recommended by them.',
  keywords: 'tiago matias, nubank, alessandro brukheimer, runtastic, luiz fernando, quinto andar, lorival chapuis, conta azul, lucas cunha, jobscore, guilherme branco'
};

export class Recommendations extends Component {
  render() {
    return (
      <Viewport
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}>
        <Hero title="Recommendations" size="small" sectionTheme="primary" />
        <Section>
          <Row>
            <Col size="12">
              <RecommendationList>
                <Recommendation id="matias" />
                <Recommendation id="bruckheimer" />
                <Recommendation id="chapuis" />
                <Recommendation id="jim" />
                <Recommendation id="rodrigues" />
                <Recommendation id="cunha" />
                <Recommendation id="branco" />
                <Recommendation id="abraao" />
              </RecommendationList>
            </Col>
          </Row>
        </Section>
      </Viewport>
    );
  }
}
