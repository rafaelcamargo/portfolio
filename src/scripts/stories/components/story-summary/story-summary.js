import '@styles/story-summary.styl';
import React, { Component } from 'react';
import { RImage } from '@scripts/base/components/image/image';

export class RStorySummary extends Component {
  render() {
    const { url, lang, title, excerpt } = this.props.summary;
    return (
      <div className="r-story-summary" lang={ lang }>
        <main>
          <h2>
            <a
              href={ url.href } target={ url.target || '_self' }
              data-story-summary-title-link>
              { title }
            </a>
          </h2>
          <p>
            { excerpt }
          </p>
        </main>
      </div>
    );
  }
}
