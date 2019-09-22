import React, { Component } from 'react';
import { RCol } from '@scripts/base/components/col/col';
import { RHero } from '@scripts/base/components/hero/hero';
import { RRow } from '@scripts/base/components/row/row';
import { RSection } from '@scripts/base/components/section/section';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import { RViewport } from '@scripts/base/components/viewport/viewport';

export class Stories extends Component {
  render() {
    return (
      <RViewport>
        <RHero title="Stories" size="small" />
        <RSection>
          <RRow >
            <RCol size="12">
              <RStoryList />
            </RCol>
          </RRow>
        </RSection>
      </RViewport>
    );
  }
}
