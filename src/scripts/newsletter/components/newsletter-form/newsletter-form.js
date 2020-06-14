import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';
import { RCol } from '@scripts/base/components/col/col';
import { RField } from '@scripts/base/components/field/field';
import { RForm } from '@scripts/base/components/form/form';
import { RRow } from '@scripts/base/components/row/row';
import newsletterResource from '@scripts/newsletter/resources/newsletter';
import locales from './newsletter-form-locales';

export class RNewsletterForm extends Component {
  constructor(props){
    super(props);
    this.setTexts(locales[this.props.lang]);
    this.state = { name: '', email: '' };
  }

  setTexts = texts => {
    this.texts = texts;
  };

  onFormDataChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { name, email } = this.state;
    return newsletterResource.subscribe({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
        LANG: buildLang(this.props.lang),
        PROJECT: 'portfolio'
      }
    });
  };

  onSubmitSuccess = () => {
    this.setSuccessMessage(this.texts.successMessage);
    this.setState({ name: '', email: '', errorMessage: '' });
  };

  onSubmitError = () => {
    this.setErrorMessage(this.texts.errorMessage);
  };

  setErrorMessage = errorMessage => {
    this.setState({ errorMessage })
  };

  setSuccessMessage = successMessage => {
    this.setState({ successMessage })
  };

  render(){
    return (
      <div className="r-newsletter-form">
        <RForm
          onSubmit={ this.onSubmit }
          onSubmitSuccess={ this.onSubmitSuccess }
          onSubmitError={ this.onSubmitError }
          errorMessage={ this.state.errorMessage }
          successMessage={ this.state.successMessage }>
          <RRow>
            <RCol size="12">
              <RField label={ this.texts.name }>
                <input name="name" onChange={ this.onFormDataChange } required />
              </RField>
            </RCol>
          </RRow>
          <RRow>
            <RCol size="12">
              <RField label={ this.texts.email }>
                <input name="email" onChange={ this.onFormDataChange } required />
              </RField>
            </RCol>
          </RRow>
          <RRow>
            <RCol size="12">
              <RButton type="submit" theme="primary" block>
                { this.texts.subscribe }
              </RButton>
            </RCol>
          </RRow>
        </RForm>
      </div>
    );
  }
}

function buildLang(lang){
  return lang == 'en' ? 'English' : 'Portuguese';
}
