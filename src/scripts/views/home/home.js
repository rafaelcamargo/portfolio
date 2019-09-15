import React from 'react';
import { Hello } from '@scripts/components/hello/hello';

export class Home extends React.Component {
  render() {
    return (
      <Hello name="World" />
    );
  }
}
