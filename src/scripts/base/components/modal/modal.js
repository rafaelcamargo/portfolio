import '@styles/modal.styl';
import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';

export class RModal extends Component {
  render(){
    return (
      <div className="r-modal-backdrop">
        <div
          className="r-modal"
          style={ buildStyle(this.props.width) }
          data-modal>
          <div className="r-modal-header">
            { buildTitle(this.props.title) }
            <span className="r-modal-cose-button-container">
              <RButton
                iconName="x"
                theme="faceless"
                ariaLabel="close"
                onClick={ this.props.onClose }
                data-modal-close-button>
              </RButton>
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
  if(width)
    return { maxWidth: width };
}

function buildTitle(title){
  if(title)
    return (
      <h2 className="r-modal-title" data-modal-title>
        { title }
      </h2>
    );
}
