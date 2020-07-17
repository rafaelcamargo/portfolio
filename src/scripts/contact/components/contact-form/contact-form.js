import '@styles/contact-form.styl';
import ENV from '@environment';
import React, { Component } from 'react';
import { Button } from '@scripts/base/components/button/button';
import { Col } from '@scripts/base/components/col/col';
import { Field } from '@scripts/base/components/field/field';
import { Form } from '@scripts/base/components/form/form';
import { Row } from '@scripts/base/components/row/row';
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
        <Form
          onSubmit={ this.onSubmit }
          onSubmitSuccess={ this.onSubmitSuccess }
          onSubmitError={ this.onSubmitError }
          errorMessage={this.state.errorMessage}
          successMessage={this.state.successMessage}>
          <Row>
            <Col size="6">
              <Row>
                <Col size="12">
                  <Field label="Name">
                    <input
                      type="text"
                      name="name"
                      value={ this.state.name }
                      onChange={ this.onFormDataChange }
                      required />
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      value={ this.state.email }
                      onChange={ this.onFormDataChange }
                      required />
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <Field label="Subject">
                    <input
                      type="text"
                      name="subject"
                      value={ this.state.subject }
                      onChange={ this.onFormDataChange } />
                  </Field>
                </Col>
              </Row>
            </Col>
            <Col size="6">
              <Row>
                <Col size="12">
                  <Field label="Message">
                    <textarea
                      name="message"
                      value={ this.state.message }
                      onChange={ this.onFormDataChange }
                      required>
                    </textarea>
                  </Field>
                </Col>
              </Row>
              <Row>
                <Col size="12">
                  <Button
                    type="submit"
                    theme="primary">
                    Send
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

function getRecipientEmailAddress(){
  return ENV.VERVET.PROJECTS.MAILER.RECIPIENT;
}
