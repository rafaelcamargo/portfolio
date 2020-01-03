import '@styles/form.styl';
import React, { Component } from 'react';
import { RAlert } from '@scripts/base/components/alert/alert';
import { RLoader } from '@scripts/base/components/loader/loader';

export class RForm extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setLoaderVisibility(true);
    this.setSuccessAlertVisibility(false);
    this.setErrorAlertVisibility(false);
    this.props.onSubmit().then(this.handleSubmitSuccess, this.handleSubmitError);
  };

  handleSubmitSuccess = response => {
    this.onSubmitComplete();
    this.setSuccessAlertVisibility(true);
    this.props.onSubmitSuccess(response);
  };

  handleSubmitError = err => {
    this.onSubmitComplete();
    this.setErrorAlertVisibility(true);
    this.props.onSubmitError(err);
  };

  onSubmitComplete = () => {
    this.setLoaderVisibility(false);
  };

  setLoaderVisibility = shouldShow => {
    this.setState({ shouldShowLoader: shouldShow });
  };

  setErrorAlertVisibility = shouldShow => {
    this.setState({ shouldShowErrorAlert: shouldShow });
  };

  setSuccessAlertVisibility = shouldShow => {
    this.setState({ shouldShowSuccessAlert: shouldShow });
  };

  render() {
    return (
      <form className="r-form" onSubmit={ this.handleSubmit }>
        { handleAlert(this.state, this.props, this.handleSubmit) }
        { handleLoader(this.state) }
        { this.props.children }
      </form>
    );
  }
}

function handleAlert(state, props, onTriggerClick){
  if(state.shouldShowErrorAlert)
    return buildAlert(
      'danger',
      'Sorry, something went wrong.',
      props.errorMessage,
      onTriggerClick,
      'Retry'
    );
  if(state.shouldShowSuccessAlert)
    return buildAlert(
      'success',
      'Success!',
      props.successMessage,
      null,
      ''
    );
  return null;
}

function buildAlert(theme, defaultMessage, customMessage, onTriggerClick, triggerText){
  return  <div className="r-form-alert-container">
            <RAlert
              theme={ theme }
              onTriggerClick={ onTriggerClick }
              triggerText={ triggerText }>
              { customMessage || defaultMessage }
            </RAlert>
          </div>;
}

function handleLoader({ shouldShowLoader }) {
  return shouldShowLoader ?
    <div className="r-form-loader-container">
      <RLoader />
    </div> :
    null;
}
