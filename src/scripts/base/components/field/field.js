import '@styles/field.styl';
import React, { Component } from 'react';

export class Field extends Component {
  render() {
    return (
      <div className="r-field">
        <div className="r-field-label-wrapper">
          <label className={ buildLabelClassName(this.props.children) }>
            { this.props.label }
          </label>
        </div>
        <div className="r-field-content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

function buildLabelClassName(children){
  return children && children.props.required ? 'r-field-required' : '';
}
