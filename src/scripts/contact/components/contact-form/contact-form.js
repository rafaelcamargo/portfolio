import '@styles/contact-form.styl';
import ENV from '@environment';
import React, { Component } from 'react';
import { Row, Col, Button, Field, Form, Input, Textarea } from '@glorious/taslonic/react';
import contactResource from '@scripts/contact/resources/contacts';

export class ContactForm extends Component {
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
    this.setState({ name: '', email: '', subject: '', message: '' });
  };

  buildErrorMessage = () => {
    return (
      <span>
        Sorry, something went wrong.<br/>
        If the error persists, you can reach me at
        <a href="mailto:hello@rafaelcamargo.com">hello@rafaelcamargo.com</a>.
      </span>
    )
  }

  render() {
    return (
      <div className="r-contact-form">
        <Form
          onSubmit={ this.onSubmit }
          onSubmitSuccess={ this.onSubmitSuccess }
          submitErrorMessage={this.buildErrorMessage()}
          submitSuccessTitle="Message sent!"
          submitSuccessMessage="Thanks for your contact, I'll reply to you soon!">
            <Row>
              <Col>
                <Field label="Name" block>
                  <Input
                    name="name"
                    value={ this.state.name }
                    onChange={ this.onFormDataChange }
                    required
                    block />
                </Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field label="Email" block>
                  <Input
                    type="email"
                    name="email"
                    value={ this.state.email }
                    onChange={ this.onFormDataChange }
                    required
                    block />
                </Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field label="Subject" block>
                  <Input
                    name="subject"
                    value={ this.state.subject }
                    onChange={ this.onFormDataChange }
                    block />
                </Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Field label="Message" block>
                  <Textarea
                    name="message"
                    value={ this.state.message }
                    onChange={ this.onFormDataChange }
                    required
                    block />
                </Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  type="submit"
                  theme="primary"
                  block>
                  Send
                </Button>
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
