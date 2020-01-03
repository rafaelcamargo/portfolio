import '@styles/contact-form.styl';
import ENV from '@environment';
import React, { Component } from 'react';
import { RButton } from '@scripts/base/components/button/button';
import { RCol } from '@scripts/base/components/col/col';
import { RField } from '@scripts/base/components/field/field';
import { RForm } from '@scripts/base/components/form/form';
import { RRow } from '@scripts/base/components/row/row';
import contactResource from '@scripts/contact/resources/contacts';

export class RContactForm extends Component {
  constructor(props){
    super(props);
    this.state = { name: '', email: '', message: '', subject: '' };
  }

  onFormDataChange = ({ target }) => {
   const { name, value } = target;
   this.setState({ [name]: value });
 };

  onSubmit = () => {
    const { name, email, message, subject } = this.state;
    return contactResource.send({
      to: getRecipientEmailAddress(),
      name,
      email,
      subject,
      message
    });
  };

  onSubmitSuccess = () => {
    const message = 'Thanks for your contact, I\'ll reply to you soon!';
    this.setSuccessMessage(message);
    this.setState({ name: '', email: '', subject: '', message: '' });
  };

  onSubmitError = () => {
    const message = `Sorry, something went wrong. Please, try again or send an email to ${getRecipientEmailAddress()}`;
    this.setErrorMessage(message);
  };

  setErrorMessage = errorMessage => {
    this.setState({ errorMessage })
  };

  setSuccessMessage = successMessage => {
    this.setState({ successMessage })
  };

  render() {
    return (
      <div className="r-contact-form">
        <RForm
          onSubmit={ this.onSubmit }
          onSubmitSuccess={ this.onSubmitSuccess }
          onSubmitError={ this.onSubmitError }
          errorMessage={this.state.errorMessage}
          successMessage={this.state.successMessage}
          resetFormOnSubmitSuccess={true}>
          <RRow>
            <RCol size="6">
              <RRow>
                <RCol size="12">
                  <RField label="Name">
                    <input
                      type="text"
                      name="name"
                      value={ this.state.name }
                      onChange={ this.onFormDataChange }
                      required />
                  </RField>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RField label="Email">
                    <input
                      type="email"
                      name="email"
                      value={ this.state.email }
                      onChange={ this.onFormDataChange }
                      required />
                  </RField>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RField label="Subject">
                    <input
                      type="text"
                      name="subject"
                      value={ this.state.subject }
                      onChange={ this.onFormDataChange } />
                  </RField>
                </RCol>
              </RRow>
            </RCol>
            <RCol size="6">
              <RRow>
                <RCol size="12">
                  <RField label="Message">
                    <textarea
                      name="message"
                      value={ this.state.message }
                      onChange={ this.onFormDataChange }
                      required>
                    </textarea>
                  </RField>
                </RCol>
              </RRow>
              <RRow>
                <RCol size="12">
                  <RButton
                    type="submit"
                    theme="primary">
                    Send
                  </RButton>
                </RCol>
              </RRow>
            </RCol>
          </RRow>
        </RForm>
      </div>
    );
  }
}

function getRecipientEmailAddress(){
  return ENV.VERVET.PROJECTS.MAILER.RECIPIENT;
}
