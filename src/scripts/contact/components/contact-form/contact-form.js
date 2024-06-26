import '@styles/contact-form.styl';
import ENV from '@environment';
import React, { useState } from 'react';
import { Row, Col, Button, Field, Form, Input, Textarea } from '@glorious/taslonic-react';
import emailService from '@scripts/base/services/email/email';
import contactResource from '@scripts/contact/resources/contacts';

const NAME_FIELD_NAME = 'name';
const EMAIL_FIELD_NAME = 'email';
const SUBJECT_FIELD_NAME = 'subject';
const MESSAGE_FIELD_NAME = 'message';

export const ContactForm = () => {
  const [formData, setFormData] = useState(getFormDataInitialState());
  const getFieldValue = fieldName => formData[fieldName] || '';
  const onFormDataChange = ({ target: { name, value } }) => setFormData(prevState => ({ ...prevState, [name]: value }));
  const onSubmit = () => contactResource.send({ to: getRecipientEmailAddress(), ...formData });
  const onSubmitSuccess = () => setFormData(getFormDataInitialState());

  return (
    <div className="r-contact-form">
      <Form
        onSubmit={onSubmit}
        onSubmitSuccess={onSubmitSuccess}
        submitErrorMessage={buildErrorMessageElement()}
        submitSuccessTitle="Message sent!"
        submitSuccessMessage="Thanks for your contact, I'll reply to you soon!"
      >
        <Row>
          <Col sm="6">
            <Field label="Name" block>
              <Input
                name={NAME_FIELD_NAME}
                value={getFieldValue(NAME_FIELD_NAME)}
                onChange={onFormDataChange}
                required
                block />
            </Field>
          </Col>
          <Col sm="6">
            <Field label="Email" block>
              <Input
                type="email"
                name={EMAIL_FIELD_NAME}
                value={getFieldValue(EMAIL_FIELD_NAME)}
                onChange={onFormDataChange}
                validations={emailService.getValidations()}
                required
                block />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field label="Subject" block>
              <Input
                name={SUBJECT_FIELD_NAME}
                value={getFieldValue(SUBJECT_FIELD_NAME)}
                onChange={onFormDataChange}
                block />
            </Field>
          </Col>
        </Row>
        <Row>
          <Col>
            <Field label="Message" block>
              <Textarea
                name={MESSAGE_FIELD_NAME}
                value={getFieldValue(MESSAGE_FIELD_NAME)}
                onChange={onFormDataChange}
                required
                block />
            </Field>
          </Col>
        </Row>
        <Row alignXs="center">
          <Col sm="4">
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

function getFormDataInitialState(){
  return { name: '', email: '', subject: '', message: '' };
}

function buildErrorMessageElement(){
  const email = getRecipientEmailAddress();

  return (
    <span>
      Sorry, something went wrong.<br/>
      If the error persists, you can reach me at <a href={`mailto:${email}`}>
      {email}</a>.
    </span>
  );
}

function getRecipientEmailAddress(){
  return ENV.VERVET.PROJECTS.MAILER.RECIPIENT;
}
