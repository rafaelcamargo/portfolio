const _public = {};

_public.getValidations = () => {
  return [
    {
      isValid: emailAddress => {
        const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/, 'i');
        return regex.test(emailAddress);
      },
      errorMessage: 'Please, enter a valid email.'
    }
  ]
}

export default _public;
