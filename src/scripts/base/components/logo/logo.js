import '@styles/logo.styl';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';

export class Logo extends Component {
  render() {
    return (
      <div className="r-logo">
        <Link to="/" title="homepage">
          <Icon name="rc" />
        </Link>
      </div>
    );
  }
}
