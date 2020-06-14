import vervetResource from '@scripts/base/resources/vervet';
import newsletterResource from './newsletter';

describe('Newsletter Resource', () => {
  beforeEach(() => {
    vervetResource.post = jest.fn();
  });

  it('should subscribe a member', () => {
    const data = { email_address: 'some@email.com' };
    newsletterResource.subscribe(data);
    expect(vervetResource.post).toHaveBeenCalledWith(
      '569e642a-9f75-41dc-9a96-7ac66bc6eef9',
      'lists/aec1ae3c35/members',
      data
    );
  });
});
