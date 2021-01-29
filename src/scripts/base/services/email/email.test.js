import emailService from './email';

describe('Email Service', () => {
  it('should get email validations', () => {
    const validations = emailService.getValidations();
    expect(validations.length).toEqual(1);
    expect(validations[0].isValid('asd@d')).toEqual(false);
    expect(validations[0].isValid('asd@d.com')).toEqual(true);
    expect(validations[0].errorMessage).toEqual('Please, enter a valid email.');
  });
});
