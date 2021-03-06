import React, { Component } from 'react';
import dateService from '@scripts/base/services/date/date';

export class Time extends Component {
  render() {
    return (
      <time className="r-time" dateTime={ this.props.dateTime }>
        { dateService.format(this.props.dateTime, this.props.lang) }
      </time>
    );
  }
}
