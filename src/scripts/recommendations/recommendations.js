import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRecommendation } from '@scripts/recommendations/components/recommendation/recommendation';
import { RRecommendationList } from '@scripts/recommendations/components/recommendation-list/recommendation-list';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RViewport } from '@scripts/base/components/viewport/viewport';

const meta = {
  title: 'Recommendations',
  description: `I had the privilege to work with awesome developers. I am
    very proud to be recommended by them.`,
  keywords: `tiago matias, nubank, alessandro brukheimer, runtastic, luiz fernando,
    quinto andar, lorival chapuis, conta azul, lucas cunha, jobscore, guilherme branco`
};

export class Recommendations extends Component {
  render() {
    return (
      <RViewport
        title={ meta.title }
        description={ meta.description }
        keywords={ meta.keywords }>
        <RHero title="Recommendations" size="small" />
        <RSection>
          <RRow>
            <RCol size="12">
              <RRecommendationList>
                <RRecommendation id="matias" />
                <RRecommendation id="bruckheimer" />
                <RRecommendation id="rodrigues" />
                <RRecommendation id="chapuis" />
                <RRecommendation id="cunha" />
                <RRecommendation id="branco" />
              </RRecommendationList>
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
