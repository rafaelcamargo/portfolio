import '@styles/modal.styl';
import React, { Component } from 'react';
import { Button } from '@scripts/base/components/button/button';

export class Modal extends Component {
  render(){
    return (
      <div className="r-modal-backdrop">
        <div
          className="r-modal"
          style={ buildStyle(this.props.width) }
          data-modal>
          <div className="r-modal-header">
            { buildTitle(this.props.title) }
            <span className="r-modal-close-button-container">
              <Button
                ariaLabel="close"
                theme="faceless"
                onClick={ this.props.onClose }
                data-modal-close-button>
                ×
              </Button>
            </span>
          </div>
          <div className="r-modal-content">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

function buildStyle(width){
  return width ? { maxWidth: width } : {};
}

function buildTitle(title){
  if(title)
    return (
      <h2 className="r-modal-title" data-modal-title>
        { title }
      </h2>
    );
}
