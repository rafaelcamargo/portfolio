import '@styles/story-footer.styl';
import React, { Component } from 'react';
import { RPitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';

export class RStoryFooter extends Component {
  render() {
    return (
      <footer className="r-story-footer">
        <RPitsbyPromo />
      </footer>
    );
  }
}
