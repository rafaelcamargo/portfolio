title: Improving the developer experience with smart forms
date: 2021-10-02
description: At some point in my career, I started to dream with two HTML improvements that would make me very, very, very happy.
keywords: forms, smart, experience, developer, react, vue

---

Every time I read the documentation of libraries that promise to make the development of forms easier, I get deep frustrated. I can't believe someone looks to those libraries and thinks they really improve the development experience.

Some of the reasons would include the counterintuitiveness of those APIs, the amount of code a developer still needs to write, and the difficulties of reusing that code. But the root cause behind all these reasons is the same. The lack of audacity at the moment those libraries were designed. Yes, in my opinion, those libraries seem to start solving the problem ahead of the desired starting point. The moment in which "we can be crazy" or the "what if we tried a completely different thing" moment. Those libraries have internalized the boringness involved in developing a form, so they can't find any way to overcome it.

At some point in my career, I started to dream with two HTML improvements that would make me very, very, very happy.

The first one regards the form control elements. That is, `<input>`, `<select>` and `<textarea>`, basically. My desire was that they had a property called `validations`. It will accept an Array of objects, each containing the attributes `isValid` - a function returning a Boolean value - and `errorMessage`, a String to be shown in the case of `isValid` returns false. This attribute would allow us to run several validations against a form control and set a specific message for each possible error.

The second improvement target is the `<form>` element. For SPAs, it would be great to use properties like `successMessage` and `errorMessage`. On submit success, the form would show the success message along with a toast. If the request failed, a banner would show the error message with a retry button at the top of the form.

Translating my dream to HTML, we'd have something like this:

``` html
<form
  onSubmit="() => axios.post(...)"
  successMessage="Alright, thank you!"
  errorMessage="Something went wrong. Please, try again."
>
  <input
    aria-label="Enter a programming language"
    validations="[{ isValid: value => value === 'JavaScript', errorMessage: 'Please, choose a funnier one.' }]"
    placeholder="Enter a programming language"
  />
  <button type="submit">
    Send
  </button>
</form>
```

For three years, my tiny letters to Santa Claus banged to that dream become true. So at the end of 2020, convinced that Santa would ignore me one more time, I decided to put my hands on it and make it happen by force.

The form creation experience was the true motivation behind [Taslonic](https://taslonic.com). I created it to set me free from the ordinary work and focus on the extraordinary one. No one deserves to waste hours of life implementing the same form use cases, again and again, every time the application needs another form. Besides wasting time, the repetitive implementation of those cases - feedbacks for success/error/processing - leads to uncountable inconsistencies in the use of the application. Sometimes a developer implements them one way, sometimes another developer makes them another way. Not to say the times some of those use cases are forgotten. Who hasn't ever stood before a never-ending *loading* even after a request failure?

Explore this example of a newsletter form made with Taslonic.

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glorious/taslonic/taslonic.css">
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@glorious/taslonic/vue/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>
<div data-root style="margin-bottom: 100px">
  <t-row align="center" offset-xs="10">
    <t-col sm="8">
      <t-form
        :on-submit="onSubmit"
        :on-submit-success="onSubmitSuccess"
        submit-success-title="Great!"
        submit-success-message="Thanks for subscribing.">
        <t-row>
          <t-col>
            <t-field label="Email Address" block>
              <t-input v-model="data.email" :validations="emailValidations" block required />
            </t-field>
          </t-col>
        </t-row>
        <t-row>
          <t-col>
            <t-button type="submit" theme="primary" block>
              Subscribe
            </t-button>
          </t-col>
        </t-row>
      </t-form>
    </t-col>
  </t-row>
</div>
<script src="../scripts/smart-form.js"></script>

Here is all I needed to implement to create this form:

- Email address validation
- Request fired on submit
- Data reset on submit success

Below, everything the form brings me without making me write one single line of code:

1. Shows an asterisk aside required field labels
2. Shows the error message for invalid fields only after the user blurs them at least once.
3. Shows the error messages for all invalid fields on submit if the user tries to submit the form without filling them correctly.
4. Replaces the submit button label with a *loader* during the request and returns it to the original state when the request is complete.
5. Disables the submit button during the request processing to avoid multiple submissions.
6. Fires a toast containing a custom message on submit success.
7. Shows a banner at the top of the form containing a button that allows users to resend data on submit error.

**They represent seven use cases that I didn't need to implement and, consequently, test**. Are you curious to see the code? Here are some links:

<ul>
  <li>
  <a href="https://components.taslonic.com/#!/components/vue/playground?tab=2&code=eyJ0ZW1wbGF0ZSI6Ijx0LXJvdyBhbGlnbj1cImNlbnRlclwiPlxuICA8dC1jb2wgbWQ9XCI0XCI%252BXG4gICAgPHQtZm9ybVxuICAgICAgOm9uLXN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgIDpvbi1zdWJtaXQtc3VjY2Vzcz1cIm9uU3VibWl0U3VjY2Vzc1wiXG4gICAgICBzdWJtaXQtc3VjY2Vzcy10aXRsZT1cIkdvb2Qgam9iIVwiXG4gICAgICBzdWJtaXQtc3VjY2Vzcy1tZXNzYWdlPVwiRm9ybSBzdWNjZXNzZnVsbHkgc2VudC5cIj5cbiAgICAgIDx0LXJvdz5cbiAgICAgICAgPHQtY29sPlxuICAgICAgICAgIDx0LWZpZWxkIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiIGJsb2NrPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD1cImRhdGEuZW1haWxcIiA6dmFsaWRhdGlvbnM9XCJlbWFpbFZhbGlkYXRpb25zXCIgYmxvY2sgcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L3QtZmllbGQ%252BXG4gICAgICAgIDwvdC1jb2w%252BXG4gICAgICA8L3Qtcm93PlxuICAgICAgPHQtcm93PlxuICAgICAgICA8dC1jb2w%252BXG4gICAgICAgICAgPHQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB0aGVtZT1cInByaW1hcnlcIiBibG9jaz5cbiAgICAgICAgICAgIFN1YnNjcmliZVxuICAgICAgICAgIDwvdC1idXR0b24%252BXG4gICAgICAgIDwvdC1jb2w%252BXG4gICAgICA8L3Qtcm93PlxuICAgIDwvdC1mb3JtPlxuICA8L3QtY29sPlxuPC90LXJvdz5cbiIsImNvbnRyb2xsZXIiOiJyZXR1cm4ge1xuICBkYXRhKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgdmFsaWRFbWFpbFJlZ2V4OiBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKSxcbiAgICAgIGVtYWlsVmFsaWRhdGlvbnM6IFt7XG4gICAgICAgIGlzVmFsaWQ6IHZhbHVlID0%252BIHRoaXMudmFsaWRFbWFpbFJlZ2V4LnRlc3QodmFsdWUpLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UsIGVudGVyIGEgdmFsaWQgZW1haWwuJ1xuICAgICAgfV1cbiAgICB9O1xuICB9LFxuICBcIm1ldGhvZHNcIjoge1xuICAgIG9uU3VibWl0KCl7XG4gICAgICAvLyBNYWtlIGEgbWlzdGFrZSBvbiB0aGUgdXJsIGJlbG93IHRvIHNpbXVsYXRlIGFuIGVycm9yXG4gICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cHM6Ly9hcHAuZmFrZWpzb24uY29tL3EnLCB7XG4gICAgICAgIHRva2VuOiAnX1diT0Z1TDFUdE5RNUxFbTBvdC1uUScsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25TdWJtaXRTdWNjZXNzKCl7XG4gICAgICB0aGlzLmRhdGEgPSB7IGVtYWlsOiAnJyB9O1xuICAgIH1cbiAgfVxufTsiLCJzdHlsZXMiOiJcbiJ9&source=edit-link" target="_blank">
      Smart form with Vue
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/react/playground?tab=1&code=eyJ0ZW1wbGF0ZSI6IlxuIiwiY29udHJvbGxlciI6ImZ1bmN0aW9uKCkge1xuICBjb25zdCB7IHVzZVN0YXRlIH0gPSBSZWFjdDtcbiAgY29uc3QgeyBSb3csIENvbCwgRm9ybSwgRmllbGQsIElucHV0LCBCdXR0b24gfSA9IHRhc2xvbmljUmVhY3Q7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGluaXRpYWxEYXRhID0geyBlbWFpbDogJycgfVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcbiAgICBjb25zdCB2YWxpZEVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXSskLywgJ2knKTtcbiAgICBjb25zdCBoYW5kbGVEYXRhQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlIH0gfSkgPT4gc2V0RGF0YShwcmV2RGF0YSA9PiAoeyAuLi5wcmV2RGF0YSwgW25hbWVdOiB2YWx1ZX0pKTtcbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0%252BIHtcbiAgICAgIC8vIFVuY29tbWVudCB0aGUgbGluZSBiZWxvdyB0byBzaW11bGF0ZSBhIHJlcXVlc3QgZXJyb3JcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBzZXRUaW1lb3V0KHJlamVjdCwgMTUwMCkpXG4gICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cHM6Ly9hcHAuZmFrZWpzb24uY29tL3EnLCB7XG4gICAgICAgIHRva2VuOiAnX1diT0Z1TDFUdE5RNUxFbTBvdC1uUScsXG4gICAgICAgIGRhdGEsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8Q29sIG1kPVwiNFwiPlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgICBvblN1Ym1pdFN1Y2Nlc3M9eygpID0%252BIHNldERhdGEoaW5pdGlhbERhdGEpfVxuICAgICAgICAgICAgc3VibWl0U3VjY2Vzc1RpdGxlPVwiR29vZCBqb2IhXCJcbiAgICAgICAgICAgIHN1Ym1pdFN1Y2Nlc3NNZXNzYWdlPVwiWW91J3JlIG5vdyBzdWJzY3JpYmVkXCJcbiAgICAgICAgICA%252BXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkVtYWlsIEFkZHJlc3NcIiBibG9jaz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZURhdGFDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zPXtbe1xuICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHZhbHVlID0%252BIHZhbGlkRW1haWxSZWdleC50ZXN0KHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdQbGVhc2UsIGVudGVyIGEgdmFsaWQgZW1haWwuJ1xuICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8%252BXG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPC9Db2w%252BXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c%252BXG4gICAgICAgICAgICAgIDxDb2w%252BXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdGhlbWU9XCJwcmltYXJ5XCIgYmxvY2s%252BXG4gICAgICAgICAgICAgICAgICBTdWJzY3JpYmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Db2w%252BXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0Zvcm0%252BXG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c%252BXG4gICAgKTtcbiAgfTtcbn0iLCJzdHlsZXMiOiJcbiJ9&source=edit-link" target="_blank">
      Smart form with React
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/vue/form" target="_blank">
      Taslonic docs: Vue
    </a>
  </li>
  <li>
    <a href="https://components.taslonic.com/#!/components/react/form" target="_blank">
      Taslonic docs: React
    </a>
  </li>
</ul>

If you liked what you have seen here, consider starring Taslonic's repository on [Github](https://github.com/glorious-codes/glorious-taslonic) to help more developers know it and waste less time creating forms.
