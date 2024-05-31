title: Alternative to React Hook Form
description: Every time I hear about a library aiming to improve the experience in developing forms, I can't manage my expectations accordingly and get frustrated.
keywords: React Hook Form, Taslonic, development, experience
date: 2022-01-28

---

If you're reading this sentence, you likely haven't had a good experience using React Hook Form. Me too. Every time I hear about a library aiming to improve the experience in developing forms, I can't manage my expectations accordingly and get frustrated.

Trying React Hook Forms, I noticed a more limited scope than what I was expecting. According to its slogan, "Simple React forms validation", the goal of the library is to make form validation seamless. In practice, the code you end up writing to develop a simple newsletter form, for example, is like it follows:

``` jsx
import React from 'react';
import { useForm } from "react-hook-form";

export const NewsletterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const validEmailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
  const onSubmit = formData => console.log(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name", { required: true })} />
      {errors.name?.type === 'required' && <span>Required</span>}
      <label htmlFor="email">Email</label>
      <input id="email" {...register("email", { required: true, validate: value => validEmailRegex.test(value) })} />
      {errors.email?.type === 'required' && <span>Required</span>}
      {errors.email?.type === 'validate' && <span>Enter a valid email</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
```

The points I didn't get happy with were:
1. Besides importing `react-hook-form` into the module, I still need to extract utility functions from `useForm` hook.
2. I need to wrap my submit listener inside `handleSubmit`.
3. I have to "register" every form field manually instead of just worrying about their validations.
4. Too much code written to control the visibility of each possible error message.

Using Taslonic instead React Hook Form, that same form would be written as follows:

``` jsx
import React, { useState } from 'react';
import { Form, Field, Input, Button } from '@glorious/taslonic-react';

export const NewsletterForm = () => {
  const [data, setData] = useState({})
  const validEmailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
  const emailValidations = [{ isValid: value => validEmailRegex.test(value), errorMessage: 'Enter a valid email'}]
  const handleFieldChange = ({ target: { name, value } }) => setData(prevData => ({ ...prevData, [name]: value }))
  const onSubmit = () => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Field label="Name">
        <Input name="name" value={data.name} onChange={handleFieldChange} required />
      </Field>
      <Field label="Email">
        <Input name="email" value={data.email} validations={emailValidations} onChange={handleFieldChange} required />
      </Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
```

The use of Taslonic doesn't change anything regarding the way React manages state, so you keep managing your form data the exact same way you are used to. The same is also true for the form submit listener.

Form fields will automatically connect themselves to the form, so you don't have to do it manually for each form field.

The required field validation is set the same way you do it natively in HTML. All the other custom validations are set using always the same strategy. Taslonic form fields are powered with the `validations` property. It allows an array of objects containing the following attributes:
- `isValid`: A function that receives the value of a form field and returns `true` if the value is valid.
- `errorMessage`: Message to be shown in the case of the function above returns `false`.

Zero lines of code are necessary to control the visibility of error messages. It gets automatically controlled by Taslonic.

Until now, we reach the possibility to set validations in a very straightforward manner. All you had to do was to import Taslonic components and set a special validation for the email field using the `validations` property. But it's just the tip of an iceberg. The benefits offered by Taslonic to make form development easier go far beyond:

1. Shows an asterisk aside required field labels
2. Shows the error message for invalid fields only after the user blurs them at least once.
3. Shows the error messages for all invalid fields on submit if the user tries to submit the form without filling them correctly, and focuses on the first invalid field.
4. Replaces the submit button label with a *loader* during the request and returns it to the original state when the request is complete.
5. Disables the submit button during the request processing to avoid multiple submissions.
6. Fires a toast containing a custom message on submit success.
7. Shows a banner at the top of the form containing a button that allows users to resend data on submit error.

**They represent seven use cases that you didn't need to implement and, consequently, test**. Are you curious to play around? Here are some links:

- [Working Taslonic Form](https://taslonic-docs.compilorama.com/#!/components/react/playground?tab=0&code=eyJ0ZW1wbGF0ZSI6IlxuIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcbiAgY29uc3QgeyBSb3csIENvbCwgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24gfSA9IHRhc2xvbmljUmVhY3Q7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGluaXRpYWxEYXRhID0geyBlbWFpbDogJycgfVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKTtcbiAgICBjb25zdCBoYW5kbGVEYXRhQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0gfSkgPT4gc2V0RGF0YShwcmV2RGF0YSA9PiAoeyAuLi5wcmV2RGF0YSwgW25hbWVdOiB2YWx1ZX0pKTtcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0%252BIHtcbiAgICAgIC8vIFRoZSBmb2xsb3dpbmcgcHJvbWlzZSBzaW11bGF0ZXMgYSBzdWNlc3NmdWwgcmVxdWVzdC5cbiAgICAgIC8vIFRvIHNpbXVsYXRlIGFuIGVycm9yLCB1c2UgcmVqZWN0LlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0%252BIHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Um93IGFsaWduPVwiY2VudGVyXCI%252BXG4gICAgICAgIDxDb2wgbWQ9XCI0XCI%252BXG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgICAgIG9uU3VibWl0U3VjY2Vzcz17KCkgPT4gc2V0RGF0YShpbml0aWFsRGF0YSl9XG4gICAgICAgICAgICBzdWJtaXRTdWNjZXNzVGl0bGU9XCJHcmVhdCFcIlxuICAgICAgICAgICAgc3VibWl0U3VjY2Vzc01lc3NhZ2U9XCJUaGFua3MgZm9yIHN1YnNjcmliaW5nLlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCIgYmxvY2s%252BXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRhQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17W3tcbiAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB2YWx1ZSA9PiB2YWxpZEVtYWlsUmVnZXgudGVzdCh2YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnRW50ZXIgYSB2YWxpZCBlbWFpbC4nXG4gICAgICAgICAgICAgICAgICAgIH1dfVxuICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aGVtZT1cInByaW1hcnlcIiBibG9jaz5cbiAgICAgICAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Db2w%252BXG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xufSIsInN0eWxlcyI6IlxuIn0%253D&source=edit-link)
- [Taslonic Docs](https://taslonic.compilorama.com/react)

If you liked this post, consider starring Taslonic's repository on [Github](https://github.com/glorious-codes/glorious-taslonic).
