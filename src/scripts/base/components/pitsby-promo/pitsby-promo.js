import '@styles/pitsby-promo.styl';
import React, { Component } from 'react';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';
import { Image } from '@scripts/base/components/image/image';

export class PitsbyPromo extends Component {
  render() {
    return (
      <div className="r-pitsby-promo">
        <ExternalLink href="https://pitsby.com/?utm_source=rafaelcamargo&utm_medium=promo">
          <div className="r-pitsby-promo-content">
            <h3>
              Have a nice time documenting components.
            </h3>
            <p>
              Create a beautiful documentation for your components writing dead simple files.
            </p>
            <Image filename="pitsby-ui.png" alt="Pitsby's UI" />
          </div>
        </ExternalLink>
      </div>
    );
  }
}
