import '@styles/logo.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RIcon } from '@scripts/base/components/icon/icon';

export class RLogo extends Component {
  render() {
    return (
      <div className="r-logo">
        <Link to="/">
          <RIcon name="rc" />
        </Link>
      </div>
    );
  }
}
