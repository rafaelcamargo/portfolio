import '@styles/logo.styl';
import React, { Component } from 'react';
import { RIcon } from '@scripts/components/icon/icon';

export class RLogo extends Component {
  render() {
    return (
      <div className="r-logo">
        <RIcon name="rc" />
      </div>
    );
  }
}
