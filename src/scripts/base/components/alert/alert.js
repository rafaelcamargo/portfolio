import '@styles/alert.styl';
import React, { Component } from 'react';

export class Alert extends Component {
  constructor(props){
    super(props);
    this.state = { className: buildClassName(props) };
  }
  render() {
    return (
      <div className={ this.state.className }>
        { this.props.children }
        { buildTrigger(this.props.onTriggerClick, this.props.triggerText) }
      </div>
    );
  }
}

function buildClassName({ theme, onTriggerClick }){
  const baseCssClass = getBaseCssClass();
  const themeCssClass = prependBaseCssClass(buildThemeCssClass(theme));
  const triggerCssClass = prependBaseCssClass(buildTriggerCssClass(onTriggerClick));
  return `${ baseCssClass } ${ themeCssClass } ${ triggerCssClass }`.trim();
}

function getBaseCssClass(){
  return 'r-alert';
}

function prependBaseCssClass(cssClass){
  return cssClass ? [getBaseCssClass(), cssClass].join('-') : '';
}

function buildThemeCssClass(theme){
  return isThemeValid(theme) ? theme : '';
}

function isThemeValid(theme){
  return ['success', 'danger'].includes(theme);
}

function buildTriggerCssClass(onTriggerClick){
  return onTriggerClick ? 'has-trigger' : '';
}

function buildTrigger(onTriggerClick, triggerText){
  return onTriggerClick ?
    <button className="r-alert-trigger" onClick={ onTriggerClick }>
      { triggerText }
    </button> :
    null;
}
