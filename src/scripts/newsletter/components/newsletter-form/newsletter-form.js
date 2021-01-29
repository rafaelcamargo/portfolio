import React, { Component } from 'react';
import { Row, Col, Button, Field, Form, Input } from '@glorious/taslonic/react';
import emailService from '@scripts/base/services/email/email';
import newsletterResource from '@scripts/newsletter/resources/newsletter';
import locales from './newsletter-form-locales';

export class NewsletterForm extends Component {
  constructor(props){
    super(props);
    this.setTexts(locales[this.props.lang]);
    this.state = { name: '', email: '' };
  }

  setTexts = texts => {
    this.texts = texts;
  };

  onFormDataChange = ({ target: { name, value } }) => {
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
    this.setState({ name: '', email: '' });
  };

  render(){
    return (
      <div className="r-newsletter-form">
        <Form
          onSubmit={ this.onSubmit }
          onSubmitSuccess={ this.onSubmitSuccess }
          submitSuccessTitle={ this.texts.successTitle }
          submitSuccessMessage={ this.texts.successMessage }
          submitErrorMessage={ this.texts.errorMessage }>
          <Row>
            <Col>
              <Field label={ this.texts.name } block>
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
              <Field label={ this.texts.email } block>
                <Input
                  name="email"
                  value={ this.state.email }
                  onChange={ this.onFormDataChange }
                  validations={ emailService.getValidations() }
                  required
                  block />
              </Field>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="submit" theme="primary" block>
                { this.texts.subscribe }
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

function buildLang(lang){
  return lang == 'en' ? 'English' : 'Portuguese';
}
