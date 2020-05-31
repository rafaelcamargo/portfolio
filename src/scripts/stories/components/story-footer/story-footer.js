import '@styles/story-footer.styl';
import React, { Component } from 'react';
import { RDivider } from '@scripts/base/components/divider/divider';
import { RPitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';
import { RStoryRelations } from '@scripts/stories/components/story-relations/story-relations';

export class RStoryFooter extends Component {
  render() {
    return (
      <footer className="r-story-footer">
        { buildStoryRelation(this.props.storyRelationIds, this.props.lang) }
        <RDivider />
        <RPitsbyPromo />
      </footer>
    );
  }
}

function buildStoryRelation(storyRelationIds, lang){
  if(storyRelationIds)
    return (
      <>
        <RDivider />
        <RStoryRelations
          ids={ storyRelationIds }
          lang={ lang } />
      </>
    )
}
