import '@styles/hello.styl';
import React from 'react';
import PropTypes from 'prop-types'

export class Hello extends React.Component {
  render() {
    return (
      <div className="hello">
        Hello { this.props.name }!
      </div>
    );
  }
}

Hello.defaultProps = {
  name: 'World'
};
